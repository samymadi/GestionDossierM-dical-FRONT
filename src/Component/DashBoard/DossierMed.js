import {useState,useContext,useEffect,createContext} from 'react';
import { useHistory } from 'react-router-dom';

import Styles from '../../Styles/Dashboard/DossierMed.module.css';
import AuthContext from '../../Context/AuthContext';
import {HttpRequest} from '../../Models/User';
import Cookies from 'js-cookie';
import {Patient} from '../../Context/AuthContext';

import ManageDocument from './ManageDocument';


// ------------------------------------Icons Imports---------------------------------

import AddDocument from '../../Assests/Icons/AddDocument.png';
import CreateFolder from '../../Assests/Icons/CreateFolder.png';
import ModalContainer from '../Modals/ModalContainer';
import EditDoc from '../Modals/ManageMed/EditDoc';
import axios from 'axios';


function DossierMed({...rest}) {
    const {container,left_side,right_side,button_container,input_container,buttons,container_extend,animate} = Styles;
    const  privileges = useContext(AuthContext);

   
    
    
    const [animation,setAnimation] = useState("");
    const [modalDisplay,setModalDisplay] = useState(false);
    const [openNew,setOpenNew] = useState(false);
    const [folderName,setFolderName]= useState("");
    const [currentFolderId,setCurrentFolderId] = useState();  
    const [currentPatient,setCurrentPatient] = useState("");
    
    const element = {
        setModalOpen: setOpenNew,
        contentContainerSize:{
            width:"60%",
            margin:"30px auto"
        }
    }

   async function createFolderApi(){
    const data = {User_Id:currentPatient.Id_Patient,folderName}
    const request = new HttpRequest(data,Cookies.getJSON("SessionAuth"));
    console.log(request);
      await axios.post("http://localhost:8000/MedDoc/createFolder",request)
        .then(result=>{
            if(result.status !==201) console.log(result.status)
                    else {
                        console.log("Created",result);
                    }
        })
        .catch(err=>console.log(err));
   } 


    const handleExtend = ()=>{
        setAnimation(prev =>prev == "" ? animate : "");
    }


    const handleAddDoc = ()=>{  
        setOpenNew(true);
    }


    const handleFolderChange = (e)=>{
        setFolderName(e.target.value);
    }

    const handleCreateFolder =()=>{
        if(!folderName.trim()) return;
            else createFolderApi();
    }
   
    return (
       
        <div className={container}>
            {(privileges !=1) && <div className={left_side}>
               { currentPatient.droit !=1 && <div className={`${button_container}`} onClick={handleAddDoc}>
                    <img src={AddDocument}/>
                    <p>Ajouter un document</p>
                </div >}
              { currentPatient.droit !=1 &&  <div className={`${button_container} ${container_extend} ${animation}`}  >
                    <div className={`${button_container}`} onClick={handleExtend}>
                        <img src={CreateFolder}/>
                        <p>Créer un dossier </p>

                    </div>
                    
                    <div className={input_container} >
                        <input type="text" value={folderName} onChange={handleFolderChange} placeholder="Nom du dossier" />
                                <button onClick={handleCreateFolder}>Creer</button>
                    </div>
                </div>}
                

                <PatientComponent setCurrentPatient={setCurrentPatient} currentPatient={currentPatient} ></PatientComponent>    

            </div>}



            <div className={right_side}>
              <Patient.Provider value={currentPatient}>
                    <ManageDocument patientId={currentPatient.Id_Patient} folderName={folderName}  modalDisplay={modalDisplay} setModalDisplay={setModalDisplay} setCurrentFolderId={setCurrentFolderId}currentFolderId={currentFolderId} ></ManageDocument>
                    { openNew && <ModalContainer options={{element}} > <EditDoc setOpenModif={setOpenNew} patientId={currentPatient.Id_Patient} folderId={currentFolderId}  ></EditDoc> </ModalContainer>}
              </Patient.Provider>  
            </div>

        </div>
    )
}

export default DossierMed



    const {patient_list_container,header_list,patient_list,patient_details,patient_control} = Styles;  

function PatientComponent({setCurrentPatient,currentPatient}){

    const [patientArray,setPatientArray] = useState([]);
    const history = useHistory()

    useEffect(async() => {

        const request = new HttpRequest({Visitor_Id:Cookies.getJSON("SessionAuth").Id_User},Cookies.getJSON("SessionAuth"));
        await  axios.post('http://localhost:8000/MedDoc/getPatients',request)
        .then(result=>{
            if(result.status == 200){
                setPatientArray(result.data.data);
            }
        })
        .catch(err=>{console.log(err)})
    },[]);



    const handleContact = ()=>{
        history.push("/Dashboard/Messagerie")
    }

    return (
        <div className={patient_list_container}>
            <h3>Patients :</h3>
            <div className={header_list}>
                <p>Nom</p>
                <p>Prenom</p>
            </div>

            <div className={patient_list}>
               {patientArray.map((patient,key)=>(
                   <BullePatient key={key} patient={patient} setCurrentPatient={setCurrentPatient} ></BullePatient>
               ))}


               

            </div>

          { currentPatient &&  <div className={patient_details}>
                    
                    <p>ID:&nbsp; <span>{currentPatient.Id_Patient}</span></p> 
                    <div>
                            <p>Nom: &nbsp;  <span>{currentPatient.nom}</span></p>
                            <p>Prenom: &nbsp;  <span>{currentPatient.prenom}</span></p>
                    </div>                   

                    <div className={patient_control}>
                        <button onClick={handleContact} >Contactez</button>
                    </div>
            </div>}
        </div>
    )
}

    const {container_bulle} = Styles; 

function BullePatient({patient,setCurrentPatient}){

    const {nom,prenom} = patient
    return (
        <div onClick={()=>setCurrentPatient(patient)} className={container_bulle}>
                <p>{nom}</p>
                <p>{prenom}</p>
        </div>
    )
}
