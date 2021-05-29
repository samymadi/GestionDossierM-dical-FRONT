import React, {useState} from 'react'

import AddFile from "../../Assests/Icons/AddFile.png"

import Styles from "../../Styles/Account/ManageIdentifications.module.css";


import DropDown from '../../Assests/Icons/DropDown.png';

function ManageIdentifications() {

    const {manage_identifications,content_container,document_desc,separation,doc_pro,doc_patient,demande_state,inputfile_container,inputs,file_input,select_option,submit_btn,file_submit,drop_menu} = Styles;


    const [selectedType,setSelectedType] = useState("Patient");
    const [dropMenuDisplay,setDropMenuDisplay] =useState(false);





    const handleSelectItem = (e)=>{
        setSelectedType(e.target.innerText);
    }

    const handleClickSelectOption = ()=>{
        setDropMenuDisplay(prev=>!prev);
    }
    return (
        <div className={manage_identifications}>
            <h2>Demande d'identification</h2>
            <p>Pour toute demande d'identification normal ou bien Professionnelle vous devez Envoyer un 
                certificat pour les professionnelles, un identifiant (Carte d'identité, un document qui prouve votre identité)  
                pour les non professionnelles. <br /> <br />
                Ceci est dans le cadre de la protection des arnaques et pour assurer la bonne crédibilité de notre Site.
                </p>
            <div className={content_container}>
                        <p>Dossier numerique a fournir:</p>
                        <div className={document_desc}>
                            <div className={doc_patient}>
                                <p>Patient</p>
                                <ol>
                                    <li>Carte d'identité</li>
                                </ol>
                            </div>
                            <div className={separation}></div>
                            <div className={doc_pro}>
                                <p>Professionnel (Médecin/Laboratoire)</p>
                                <ol>
                                    <li>Carde d'identité    (Médecin/Laboratoire)</li>
                                    <li>Carte Professionnelle    (Médecin/Laboratoire)</li>
                                    <li>Registre de Commerce  (Laboratoire)</li>
                                </ol>
                            </div>
                        </div>

                        <p className={demande_state}>Votre demande et en cours de traitement, Vous recevrez un email  de l'état de la demande  </p> 

                        <div className={inputfile_container}>
                            <div className={inputs}>
                                <div className={file_input} >
                                    <img src={AddFile}  />
                                    <label htmlFor="file">Ajouter un fichier (img,pdf,zip) </label>
                                </div>
                                <input id="file" type="file" multiple />
                                <div className={file_submit}>
                                    <div onClick={handleClickSelectOption} className={select_option}>
                                        <p>{selectedType}</p>
                                        <img src={DropDown} />
                                      
                                      {  dropMenuDisplay &&  <div className={drop_menu}>
                                            <p onClick={handleSelectItem} >Patient</p>
                                            <p onClick={handleSelectItem} >Professionnel</p>    
                                        </div>
                                      }
                                    </div>
                                    <div className={submit_btn}><p>soumettre</p></div>
                                </div>    
                            </div>
                        </div>
            </div>


        </div>
    )
}

export default ManageIdentifications
