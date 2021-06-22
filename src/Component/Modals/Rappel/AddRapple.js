import { useState,useEffect } from 'react';

import { useHistory } from 'react-router-dom';

import AlertMessage from '../../AlertMessage/AlertMessage';

import { HttpRequest } from '../../../Models/User';
import Cookies from 'js-cookie'
import Styles from '../../../Styles/Modals/Rappel/AddRapple.module.css';
import axios from 'axios';

function AddRapple({back,rappel}) {
    const {container,input_details_container,text_message,button_container,title} = Styles;

    const history = useHistory();   

    const [titre,setTitle] = useState();
    const [date,setDate] = useState();
    const [time,setTime] = useState();
    const [description,setDescription] = useState("");
    const [messagContent,setMessageContent] = useState("");
    const [typeMessage,setTypeMessage] = useState("");
    const [alert,setAlert] = useState(false);



    const showAlert = (message)=>{
        setMessageContent(message)
        setAlert(true);
    }

    const handleCancel =()=>{
        back(false);
    }


    const handleConfirm =async ()=>{
        if(!titre.trim())  showAlert("Saisissez un titre")
            else if(!date) showAlert("Saisissez une date valide")
                else if(!time) showAlert("Saisissez une heure valide")
                    else if(!description.trim()) showAlert("Saisissez une description")


        const data= {user_Id:Cookies.getJSON('SessionAuth').Id_User,title:titre,description:description,rappelDateFor:(`${date} ${time}`)}
        console.log("data",data)
        const request = new HttpRequest(data,Cookies.getJSON("SessionAuth"));
        await  axios.post('http://localhost:8000/Dashboard/createRappel',request)
        .then(result=>{
            if(result.status == 200)
                {
                    history.go(history.location.pathname);
                }
                    else console.log(result);
        })      
        .catch(err=>console.log(err));



    }


    const handleChangeTitle = (e)=>{
        setTitle(e.target.value);
    }

    const handleChangeTime = (e)=>{
        setTime(e.target.value);
    }


    const handleChangeDate = (e)=>{
        setDate(e.target.value);
    }


    const handleChangeDes =(e)=>{
        setDescription(e.target.value);
    }
    
    return (
        <div className={container}>
           { alert && <AlertMessage close={setAlert} type={typeMessage} messageContent={messagContent}></AlertMessage>}
            <p className={title}>Rappels</p>
            <div className={input_details_container}>
                <input type="text" placeholder="Titre" value={titre} onChange={handleChangeTitle} maxLength='30'/>
                <input type="date" value={date} onChange={handleChangeDate} />
                <input type="time" value={time} onChange={handleChangeTime} />
            </div>

            <textarea cols="30" rows="10" value={description} onChange={handleChangeDes} maxLength='480'/>
            <p className={text_message}>Veuillez saisir la date du rappel  une notification vous sera envoyé  pour vous prévenir 
            de l'approche de l'évènement </p>

            <div className={button_container}>
                <button onClick={handleCancel}>Annuler</button>
                <button onClick={handleConfirm}>Confirmer</button>
            </div>
        </div>
       
    
    )
}

export default AddRapple
