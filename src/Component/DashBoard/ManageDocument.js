import {useState,useEffect, useContext} from 'react';
import {Route,useHistory} from 'react-router-dom';

import Styles from '../../Styles/Dashboard/ManageDocument.module.css';

import axios from 'axios';

import { HttpRequest } from '../../Models/User';




// --------------------------------------Components Imports-----------------------------------

import ModalContainer from '../Modals/ModalContainer';
import DisplayDoc from '../Modals/ManageMed/DisplayDoc';
import EditDoc from '../Modals/ManageMed/EditDoc';

// --------------------------------------Icons Imports----------------------------------------


import FolderIcon from '../../Assests/Svg/Folder.svg';
import Pdf from '../../Assests/Icons/Pdf.png';
import Img from '../../Assests/Icons/Img.png';
import Zip from '../../Assests/Icons/Zip.png';
import Download from '../../Assests/Icons/Download.png';
import Edit from '../../Assests/Icons/Edit.png';
import Login_img2 from '../../Assests/Login-img2.jpg';
import Back from '../../Assests/Icons/Back.png';
import Sort from '../../Assests/Icons/sort.png';
import Cookies, { set } from 'js-cookie';
import Privilges from '../../Context/AuthContext';


function ManageDocument({setCurrentFolderId,currentFolderId,...props}) {

    const {container,header,body_container,back_container,sort_container,options_sort_container,option,no_file,back_container_disabled,title} = Styles;
    const {modalDisplay ,setModalDisplay,patientId} = props;

    const history = useHistory();
    
    const [openModif,setOpenModif] = useState(false);
    const [openFolder,setOpenFolder] = useState(false);
    const [currentDoc,setCurrentDoc] = useState();
    const [folderName,setFolderName] = useState("");
    const [foldersArray,setFolderArrays] = useState([]);
    const [documentArray,setDocumentArray] = useState([]);
    const [filter,setFilter] = useState("");

    console.log("manage doc",foldersArray);
    const privileges = useContext(Privilges)
    const element = {
        setModalOpen: setModalDisplay,
        contentContainerSize:{
            width:"65%",
            margin:"10px auto"
        }
    }

    function handleOpenModif(doc){
        setCurrentDoc(doc);
        setModalDisplay(true);
    }


   async function getFoldersApi(){
      const cookie =Cookies.getJSON("SessionAuth")
      const request = new HttpRequest({User_Id:( privileges != 1 ? patientId : cookie.Id_User) },cookie);
      await axios.post("http://localhost:8000/MedDoc/getFolders",request)
           .then(result=>{
               if(result.status !==200) console.log(result.status);
                else {
                        setFolderArrays(result.data.data);
                        console.log(result.data.data);
                }
           })
           .catch(err=>console.log(err)) 
    }

    async function getDocumentsApi (){
        console.log(currentFolderId);
        const request = new HttpRequest({dossierId:currentFolderId} ,Cookies.getJSON("SessionAuth"));
        await axios.post('http://localhost:8000/MedDoc/getDocuments',request)
              .then(result=>{
                  if(result.status == 200){
                      setDocumentArray(result.data.data);
                      console.log(result);
                  }
                   else 
                    console.log("erreur",result);
              })
              .catch(err=>console.log(err));

    }
    


    useEffect(() => {
        getFoldersApi();
        setOpenFolder(false)

    },[patientId]);

    useEffect(()=>{
        if(openFolder){
                getDocumentsApi();
            

        }
            else{
                setDocumentArray([]);
            }

    },[openFolder])



    const [displaySort,setDisplaySort]=useState(false);




    function handleSortClick(){
            setDisplaySort(prev=>!prev);
    }

    const handleBack = ()=>{
        setOpenFolder(false);
    }

    const handleChoiceClick = (e)=>{
        setFilter(e.target.innerText);
        setDisplaySort(false);
    }  

    
    
    return (
        <div className={container}>

                {modalDisplay && <ModalContainer   options={{element}}>
                                   { openModif ? <EditDoc setOpenModif={setOpenModif} ></EditDoc> : <DisplayDoc doc={currentDoc} setOpenModif={setOpenModif}></DisplayDoc>}
                                </ModalContainer>}  
            
                <div className={header}>
                   <div className={`${back_container} ${ !openFolder && back_container_disabled}`}  onClick={handleBack} >
                        <img src={Back} />
                        <p>Retour</p>
                        
                       
                    </div> 

                    
                  { openFolder &&  <p className={title}>{folderName}</p>}
                    


                    <div className={`${sort_container}`}>
                        <img src={Sort} onClick={handleSortClick} title="Trier" />
                       { displaySort && <div onClick={handleChoiceClick} className={options_sort_container}>
                          
                            <p className={option}>Création</p>
                           { openFolder && <p className={option}>Specialité</p>}
                           { openFolder &&  <p className={option}>Type de fichier </p>}
                            <p className={option}></p>
                            <p className={option}></p>
                        </div>}
                    </div>
                </div>

                <div className={body_container}>
                   
                    { !openFolder && (foldersArray.length === 0 ?  <p className={no_file}>Aucun dossier</p> : (  filter ?  <TrieFolder setCurrentFolderId={setCurrentFolderId} setFolderName={setFolderName} openFolder={setOpenFolder} array={foldersArray}></TrieFolder> : foldersArray.map((element,key)=>(
                                <Folder key={key} folderName={element.DossierName} setFolderName={setFolderName} openFolder={setOpenFolder} id={element.DossierId} setCurrentFolderId={setCurrentFolderId} ></Folder>
                            ))))
                            
                   
                   }

                    {
                         
                                    openFolder && (documentArray.length === 0 ? <p class={no_file}>Aucun document </p> : documentArray.map((doc,key)=>(
                                        <File key={key} doc={doc} openModif={handleOpenModif}></File>
                                    )) )
                    }

             
                
                          
                 

                
                    
                </div>
        </div>
    )
}

export default ManageDocument





function Folder({folderName,openFolder,setCurrentFolderId,setFolderName,id}){

    const {folder_container,folder_content,folder_footer} = Styles

    const handleClick = ()=>{
        setFolderName(folderName)
        setCurrentFolderId(id);
        openFolder(true);
    }
    return (
        <div  onClick={handleClick} className={folder_container}>

                <div className={folder_content}>
                 <img src={FolderIcon} />
                </div>
                <div className={folder_footer}>
                    <p>{folderName}</p>
                </div>
        </div>
    )
}


function File({doc,...element}){

    const {file_container,file_content,file_footer} = Styles


    const {titre} = doc;
    const {openModif} = element



    const handleClick= ()=>{
        openModif(doc);
    }
    return(
        <div onClick={handleClick} className={file_container}>
                <div className={file_content}>
                   <img src={Login_img2} alt="" />
                   <img src={Pdf}/>
                </div>

                <div className={file_footer}>
                        <p>{titre}</p>
                     
                </div>
        </div>
    )
}




function TrieFolder({array,setCurrentFolderId,setFolderName,openFolder}){
    let date; 

    return (
        <div style={{width:"100%"}}>
            
                {array.map((element,key)=>{
                    
                    
                    if(date && date === element.CreationDate.substring(5,16)) return;
                     date= element.CreationDate.substring(5,16);    

                   return (   <div key={key} style={{width:"100%",display:"flex",flexWrap:"wrap"}}>
                       <p style={{width:"100%",textAlign:"center"}}>{element.CreationDate.substring(0,16)}</p>
                        {  array.map((folder,index)=>{
                                if(folder.CreationDate.substring(5,16) === date)
                                   return <Folder setCurrentFolderId={setCurrentFolderId} folderName={element.DossierName} id={folder.DossierId} setFolderName={setFolderName} openFolder={openFolder} key={index}></Folder>
                        }) 
                         }
                     </div>   )
                })}
        </div>
    )
}


