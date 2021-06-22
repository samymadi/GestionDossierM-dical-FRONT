import React, {useState,useEffect} from 'react'
import {createPortal} from 'react-dom'
import {useHistory} from 'react-router-dom'

import Styles from "../../Styles/Modals/UpdateUserModal.module.css";
import axios from 'axios';
import { HttpRequest,SessionCookie,User} from '../../Models/User';
import Cookies from 'js-cookie';

// ------------------------Icons Import--------------------------------
import Delete from "../../Assests/Icons/Delete.png";

// ---------------------------Component Imports---------------------------------
import InputStyle from '../InputComponent/InputStyle'; 
import InputComponent from '../InputComponent/InputComponent';
import SelectInput from '../SelectInputComponent/SelectInput';
import Loading from '../Loading/Loading';



function UpdateUserModal({user,...element}) {
    const {modal,modal_container,modal_header,animate_back,animate,inputs_container,input,btn_container} = Styles;
    const {setOpenModal}= element;

    let {nom:Unom,prenom:Uprenom,dateNaissance:UdateNaissance,lieuNaissance:UlieuNaissance,adresse:Uadresse,telephone:Utelephone,sexe:Usexe}= user;
    
    const history = useHistory();

    // -----------------------------------State Variables----------------------------------
    // ------------------------------------------------------------------------------------
    const [animation,setAnimation] =useState("");
    const [animationModal,setAnimationModal] =useState("");
    const [loading,setLoading] = useState(false);


    const [nom,setNom] = useState(Unom);
    const [prenom,setPrenom] = useState(Uprenom);
    const [dateNaissance,setDateNaissance] = useState(UdateNaissance);
    const [lieuNaissance,setLieuNaissance] = useState(UlieuNaissance);
    const [telephone,setTelephone] = useState(Utelephone);
    const [adresse,setAdresse] = useState(Uadresse);
    const [genre,setGenre] = useState(Usexe === true ? "Homme" : (Usexe === false && "Femme"));
    

    const [errorNom,setErrorNom] = useState({errorMessage:"",errorTypeMessage:"warningMessage"});
    const [errorPrenom,setErrorPrenom] = useState({errorMessage:"",errorTypeMessage:"warningMessage"});
    const [errorDateNaissance,setErrorDateNaissance] = useState({errorMessage:"",errorTypeMessage:"warningMessage"});
    const [errorLieuNaissance,setErrorLieuNaissance] = useState({errorMessage:"",errorTypeMessage:"warningMessage"});
    const [errorTelephone,setErrorTelephone] = useState({errorMessage:"",errorTypeMessage:"warningMessage"});
    const [errorAdresse,setErrorAdresse] = useState({errorMessage:"",errorTypeMessage:"warningMessage"});




    // -----------------------------------UseEffect----------------------------------
    // ------------------------------------------------------------------------------------ 
    
    

    useEffect(()=>{
        setTimeout(()=>{
            setAnimation(animate_back);
            setAnimationModal(animate);
        });

        if(UdateNaissance) {UdateNaissance= new Date(UdateNaissance).toJSON().substring(0,10);

        setDateNaissance(prev=>{
            return new Date(prev).toJSON().substring(0,10);
        })
    }
    },[])



    // -----------------------------------Functions----------------------------------
    // ------------------------------------------------------------------------------------ 

    function checkInputs(){
        const changedData = {};
       
       console.log(changedData);

    }



    const handleModify = async  ()=>{
            checkInputs();    
                   
      const session = Cookies.getJSON("SessionAuth");   
      console.log(session);          
      const request = new HttpRequest(new User(nom,prenom,dateNaissance,lieuNaissance,adresse,telephone,(genre ==="Homme" ? 1: 0)),session);    
      setLoading(true);          
      await axios.post("http://localhost:8000/account/saveChange",request)
      
            .then(result=>{
                    if(result.status === 200)
                        {   
                            setOpenModal(false);
                            history.go(history.location.pathname);
                        }
                        setLoading(false);
            })
            .catch(err=>{ setLoading(false); console.log(err);})     
           
    }

   
    if(loading) return <Loading second></Loading>

    return  createPortal (
        
        <div className={`${modal} ${animation}`} onClick={()=>setOpenModal(false)}>
            
                <div className={`${modal_container} ${animationModal}`} onClick={(e)=>e.stopPropagation()}>
                    <div className={modal_header}>
                        <p>Informations Personnelles</p>
                        <img src={Delete} onClick={()=>setOpenModal(false)} />
                        
                    </div>
                    
                    <div className={inputs_container}>
                        <div>
                            <InputComponent value={nom} {...errorNom} setErrorMessage={setErrorNom} onChangeInput={setNom} maxLength="30" >{{placeholder:"Nom"}}</InputComponent>
                            <InputComponent value={prenom}  {...errorPrenom} setErrorMessage={setErrorPrenom} onChangeInput={setPrenom} maxLength="30" >{{placeholder:"Prenom"}}</InputComponent>
                        </div>
                        <div>
                            <InputComponent value={dateNaissance} inputType='date' {...errorDateNaissance} setErrorMessage={setErrorDateNaissance} onChangeInput={setDateNaissance}>{{placeholder:"Date de naissance"}}</InputComponent>
                            <InputComponent value={lieuNaissance} {...errorLieuNaissance} setErrorMessage={setErrorLieuNaissance} onChangeInput={setLieuNaissance} maxLength="30" >{{placeholder:"Lieu de naissance"}}</InputComponent>
                        </div>
                        <div>
                             <InputComponent value={telephone} {...errorTelephone} setErrorMessage={setErrorTelephone} onChangeInput={setTelephone} maxLength="10" >{{placeholder:"Telephone"}}</InputComponent>
                        </div>
                        <div>
                             <InputComponent value={adresse} {...errorAdresse}setErrorMessage={setErrorAdresse} onChangeInput={setAdresse} maxLength="100" >{{placeholder:"Adresse"}}</InputComponent>
                        </div>
                        <div>
                             <SelectInput title="Genre" optionsList={["Homme","Femme"]} placeholder="Genre" value={genre} setValue={setGenre}></SelectInput>
                        </div>
                    </div>

                    <div className={btn_container}>
                            <button onClick={()=>setOpenModal(false)}>Annuler</button>
                            <button onClick={handleModify}>Enregistrer</button>
                    </div>
                    
                </div>
        </div>
    ,document.body);
}

export default UpdateUserModal;
