import React, {useState,useEffect} from 'react'
import {createPortal} from 'react-dom'

import Styles from "../../Styles/Modals/UpdateUserModal.module.css";

// ------------------------Icons Import--------------------------------
import Delete from "../../Assests/Icons/Delete.png";

// ---------------------------Component Imports---------------------------------
import InputStyle from '../InputComponent/InputStyle'; 
import ButtonStyle from '../ButtonComponent/ButtonsStyle';

function UpdateUserModal({...element}) {
    const {modal,modal_container,modal_header,animate_back,animate,inputs_container,input,btn_container} = Styles;
    const {setOpenModal}= element;

    // -----------------------------------State Variables----------------------------------
    // ------------------------------------------------------------------------------------
    const [animation,setAnimation] =useState("");
    const [animationModal,setAnimationModal] =useState("");


    const [nom,setNom] = useState("Madi");
    const [prenom,setPrenom] = useState("Samy");
    const [dateNaissance,setDateNaissance] = useState("1999-07-12");
    const [lieuNaissance,setLieuNaissance] = useState("El-Ebiar");
    const [telephone,setTelephone] = useState("0555300442");
    const [adresse,setAdresse] = useState("Cite la concorde BT G N 10 birmourad rais alger");
    const [genre,setGenre] = useState("Homme");


   


    // -----------------------------------UseEffect----------------------------------
    // ------------------------------------------------------------------------------------ 
    
    

    useEffect(()=>{
        setTimeout(()=>{
            setAnimation(animate_back);
            setAnimationModal(animate);
        });
    })

   

    return  createPortal (
        
        <div className={`${modal} ${animation}`} onClick={()=>setOpenModal(false)}>
            
                <div className={`${modal_container} ${animationModal}`} onClick={(e)=>e.stopPropagation()}>
                    <div className={modal_header}>
                        <p>Informations Personnelles</p>
                        <img src={Delete} onClick={()=>setOpenModal(false)} />
                        
                    </div>
                    
                    <div className={inputs_container}>
                        <div>
                            <InputStyle className={input} placeholder="Nom" value={nom} setValue={setNom}></InputStyle>
                            <InputStyle className={input} placeholder="Prenom" value={prenom} setValue={setPrenom} ></InputStyle>
                        </div>
                        <div>
                            <InputStyle className={input} type="date" placeholder="date de naissance" value={dateNaissance} setValue={setDateNaissance}></InputStyle>
                            <InputStyle className={input} placeholder="lieu de naissance" value={lieuNaissance} setValue={setLieuNaissance} ></InputStyle>
                        </div>
                        <div>
                             <InputStyle className={input} style={{width:"50px"}} placeholder="Télephone" value={telephone} setValue={setTelephone}></InputStyle>
                        </div>
                        <div>
                             <InputStyle className={input} placeholder="Adresse" value={adresse} setValue={setAdresse}></InputStyle>
                        </div>
                        <div>
                             <InputStyle className={input} placeholder="Genre" value={genre} setValue={setGenre}></InputStyle>
                        </div>
                    </div>

                    <div className={btn_container}>
                            <button onClick={()=>setOpenModal(false)}>Annuler</button>
                            <button>Enregistrer</button>
                    </div>
                    
                </div>
        </div>
    ,document.body);
}

export default UpdateUserModal;
