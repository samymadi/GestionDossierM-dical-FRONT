import { useState,useEffect } from 'react';
import socketClient from 'socket.io-client';

import Styles from '../Styles/Messagerie/Messagerie.module.css';

import AlertMessage from '../Component/AlertMessage/AlertMessage';

import AddContact from '../Assests/Icons/AddContact.png';
import More from '../Assests/Icons/More.png';
import Send from '../Assests/Icons/Send.png';
import { HttpRequest,Message } from '../Models/User';
import Cookies from 'js-cookie';
import axios from 'axios';


function Messagerie() {

    const {container,message_contacts,messagerie,research_bar,contact_list_container,body,contact_name_title,message_vide} = Styles;

    const [contactID,setContactID] =useState("");
    const [discussionArray,setDiscussionArray] = useState([]); 
    const [currentUser,setCurrentUser] = useState()
    const [currentMessageArray,setCurrentMessageArray] = useState([]);
    const [currentDiscussion,setCurrentDiscussion] = useState();
    const [messagAlert,setMessageAlert] = useState("");
    const [alert,setAlert] = useState(false);
    const [messageContent,SetMessageContent] = useState("");
    const [currentSocket,setCurrrentSocket] = useState();



    async function CreateDiscussionAxios (){
        const cookie = Cookies.getJSON("SessionAuth");
        const request = new HttpRequest({id_destinataire:currentUser.idUser,messageContent},cookie);
        await axios.post("http://localhost:8000/Messagerie/createDiscussion",request)
        .then(result=>{
            if(result.status != 200) openAlert("impossible de contactez "+currentUser.nom);
                else {
                    result.data.data.nom=currentUser.nom;
                    setDiscussionArray([result.data.data]);
                    SetMessageContent("");
                    const {userID,messageContent:msC,messageDate} = result.data.data;
                    setCurrentMessageArray([new Message("",userID,msC,userID,messageDate)])
                }
        })
        .catch(err=>{
            openAlert("impossible d'envoyer le Message");
        })
    }

    async function sendMessageSocket(){
        if(!currentSocket) return;
            const data ={userId:Cookies.getJSON("SessionAuth").Id_User,messageContent:messageContent.trim(),discussionId:currentDiscussion.discussionId};
            currentSocket.emit("onSendMessage",data);
            

    }


    async function sendMessageApi(){
        if(messageContent.trim() == "") return;
             
            if(currentMessageArray.length == 0)
              await  CreateDiscussionAxios();
                    else   sendMessageSocket()
                    SetMessageContent("");
    }


    function openAlert(text){
        setMessageAlert(text);
        setAlert(true);
    }  



    async function getMessagesApi(){
        if(!currentDiscussion) return;
        const cookie = Cookies.getJSON("SessionAuth");
        const request = new HttpRequest({Id_discussion:currentDiscussion.discussionId},cookie);
        await axios.post("http://localhost:8000/Messagerie/getMessages",request)
        .then(result=>{
            if(result.status != 200) {openAlert("Impossible de charge la conversation"); setCurrentMessageArray([])}
                else {
                        setCurrentMessageArray(result.data.data);
                        console.log(result.data.data);
                        setCurrentUser(currentDiscussion);
                }
        })
        .catch(err=>{
            openAlert("Erreur");
        })
    }
    
    
    async function getDiscussions(){
        const request = new HttpRequest("data",Cookies.getJSON("SessionAuth"));
        await axios.post('http://localhost:8000/Messagerie/getDiscussions',request)
        .then(result=>{
            if(result.status == 200){
                setDiscussionArray(result.data.data);
            }
            else {
              openAlert("Erreur")
            }
        })
        .catch(err=>{openAlert("Erreur")});
    }


    async function connectToSocket(){
        let socket;
        socket = socketClient();
        
        socket.on("connect",()=>{
            console.log("connected",socket.id);
            setCurrrentSocket(socket);

            socket.on("response",(data)=>{
                openAlert(data.status);
            })

            socket.on("onMessage",(data)=>{
                console.log("onMessage");
                    setCurrentMessageArray(prev=>{
                        return [data,...prev];
                    })
            })
        })

        socket.emit("authentification",Cookies.getJSON('SessionAuth').Id_User);
    }



    useEffect(()=>{
            getDiscussions();
            connectToSocket();

    },[])


    useEffect(()=>{
        getMessagesApi();

    },[currentDiscussion])




    const handleChangeContact = (e)=>{
       
            setContactID(e.target.value);
    }


    const handleAddDisc = async ()=>{
        if(contactID.trim() == "") return;
        setContactID(prev=>prev.trim())
        console.log("contact id",contactID);
        const request = new HttpRequest({id_destinataire:contactID.trim()},Cookies.getJSON("SessionAuth"));
        await axios.post("http://localhost:8000/Messagerie/UserExist",request)
        .then(result=>{
            if(result.status == 200){
                        setCurrentUser(result.data.data);
                        setCurrentMessageArray([]);
                        setContactID('');
            }
                else {
                        openAlert("Utilisateur non Existant")

                }
        })
        .catch(err=>{
            openAlert("Erreur Server")
        });
    }

    const handleGetMessage = (disc) =>{
            setCurrentDiscussion(disc);
    }

    const handleChangeMessage = (e)=>{
        SetMessageContent(e.target.value);
    }

    const handleSendMessage = ()=>{
        sendMessageApi();
    }



    return (
        <div className={container}>
                {alert && <AlertMessage  messageContent={messagAlert} close={setAlert} ></AlertMessage>}
                <div className={message_contacts}>
                     <h2>Messages</h2>
                     <div className={research_bar}>
                            <input type="text" placeholder="Contact ID..." value={contactID} onChange={handleChangeContact} />
                            <img src={AddContact} onClick={handleAddDisc} />
                     </div>

                     <div className={contact_list_container}>
                         {discussionArray.length === 0 ?  <p className={message_vide}>Ajouter un contact</p> : (
                             discussionArray.map((disc,key)=>(
                                <ContactBulle click={handleGetMessage} key={key} disc={disc} ></ContactBulle>
                             ))
                         )}
                            
                        
                        
                     </div>
                </div>
                <div className={messagerie}>
                        <header>
                            <p className={contact_name_title}>{currentUser ? currentUser.nom : ""}</p>
                            <img src={More} />
                        </header>
                        <div className={body}> 

                            {
                               ( currentDiscussion && currentDiscussion.createur && currentDiscussion.block) && <p className={message_vide}>{currentDiscussion.nom} vous a bloqué</p> 
                            }            
                            {
                               ( currentDiscussion && !currentDiscussion.block && !currentDiscussion.createur && !currentDiscussion.accept) && <AcceptDiscussion disc={currentDiscussion} setDisc={setCurrentDiscussion} openAlert={openAlert} ></AcceptDiscussion>
                            }    

                            {
                            currentMessageArray.length != 0 ? currentMessageArray.map((message,key)=>(
                                     <MessageBulle key={key} message={message}></MessageBulle>
                            )) : <p className={message_vide}>{currentUser ? ("Envoyer un message a "+currentUser.nom+"...") : "Chosissez une dicussion ou ajouter une personne..." }</p>}
                           
                           
                            
                        </div>
                        <footer>
                            <input type="text" placeholder="Text..." maxLength="600" disabled={ (currentDiscussion && (currentDiscussion.block && !currentDiscussion.accept ))  && "true"} onChange={handleChangeMessage} value={messageContent} />
                            <button onClick={handleSendMessage}  disabled={(currentDiscussion && (currentDiscussion.block && !currentDiscussion.accept ))  && "true"} ><img src={Send} /></button>
                        </footer>

                       
                </div>
        </div>
    )
}

export default Messagerie


const {contact_bulle,contact_name,contact_message,contact_message_date} = Styles ;

function ContactBulle({disc,click}){
    return(
        <div onClick={()=>click(disc)} className={contact_bulle}>
               <p className={contact_name}>{disc.nom}</p>
               <p className={contact_message}>{disc.messageContent}</p>
               <p className={contact_message_date}>{disc.messageDate}</p> 
         </div>
    )
}

    const {bulle_container,text_message,message_date,user_style} = Styles

function MessageBulle({message,user}){

    const {messageContent,messageSender,messageDate}= message;
   
    
    return (
        <div className={`${bulle_container} ${ messageSender && user_style}`}>
                <p className={text_message}>{messageContent}</p>
                <p className={message_date}>{messageDate}</p>
        </div>
    )
}

const {accept_container} =Styles

function AcceptDiscussion({disc,openAlert,setDisc}){

    const handleClick  = async()=>{
        const request = new HttpRequest({Id_discussion:disc.discussionId},Cookies.getJSON("SessionAuth"))
        await axios.post("http://localhost:8000/Messagerie/acceptDiscussion",request)
        .then(result=>{
            if(result.status != 200) openAlert("Erreur Server");
                else {
                    setDisc(prev=>{
                        prev.accept =1;
                        return {...prev};
                    })
                }
        })
        .catch(err=>{
                openAlert("Erreur Server");
        })
    } 
        return  (
            <div className={accept_container}>
                    <p>Un nouveau Contact veut communiquer avec vous  Accepter <span>{disc.nom}</span></p>
                <div>
                <button onClick={handleClick}>Accepter</button>    
                <button onClick={handleClick}>Bloquer</button>    
                </div>   
            </div>   
        ) 
}