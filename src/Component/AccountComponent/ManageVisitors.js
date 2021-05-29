import {useState} from 'react'

import Styles from "../../Styles/Account/ManageVisitors.module.css";
import ConfirmationModal from "../Modals/ConfirmationModal"


// ----------------------------Picture Imports--------------------------

import DropDown from '../../Assests/Icons/DropDown.png';
import Delete from "../../Assests/Icons/Delete.png";


function ManageVisitors() {

    // ---------------------------------State Variable------------------------------------------
    // ----------------------------------------------------------------------------------------
    
    const [selectedOption,setSelectedOption] = useState("Lecture");
    const [modalOpen,setModalOpen] = useState(false);
    const [idUser,setIdUser] = useState("");
    const [menuDisplay,setMenuDispaly] =useState(false);


     // ---------------------------------EventListener------------------------------------------
    // ----------------------------------------------------------------------------------------
    

    const handleTypeClick = (e)=>{
            setMenuDispaly(prev=>!prev);   //Changer l'état du menu déroulant fermer / ouvrir 
    }

    const handleOnClick = (e)=>{
            setSelectedOption(e.target.innerText);
            setMenuDispaly(false)
    }

    return (
        <div className={Styles.manage_visitors} >

             { modalOpen && <ConfirmationModal close={setModalOpen} state={modalOpen} ></ConfirmationModal>}            
            <h2>Privilèges d'accès</h2>
            <p>A RETENIR !</p>
            <p>Ajouter des Privilèges aux Médecins,Laboratoires pour pouvoir ajouter modidier vos documents,
                Vous pouvez a tout les retirer  <br />
                Faite attention un accès adminitrateur (Admin) a tous les privileges avec un control total sur vos documents médicaux
            </p>
          <div className={Styles.insert_section}>
                <div className={Styles.input_container}>
                    <input type="text" placeholder="ID (Médecin/Labo)" />
                    <div className={Styles.select_input}>
                        <div onClick={handleTypeClick}>
                            <p>{selectedOption}</p>
                            <img src={DropDown} />
                        </div>  
                            <div className={Styles.options} style={menuDisplay ? {display:"unset"}: {display:"none"}}>
                                    <p onClick={handleOnClick} >Lecture</p>
                                    <p onClick={handleOnClick} >Ecriture</p>
                                    <p onClick={handleOnClick} >Admin</p>
                            </div>
                    </div>

                </div>
                <button>Ajouter</button> 
          </div>   
          <div className={Styles.Visitors_section}>
                <div className={Styles.visitors_list_container}>
                        <div className={Styles.titles_ligne_container}>
                            <p title="id">ID</p>
                            <p>Nom</p>
                            <p>Prenom</p>
                            <p>Type Compte</p>
                            <div></div>
                        </div>

                      <div className={Styles.list_container}>  
                           <UserPrivileges open={setModalOpen}></UserPrivileges>
                           <UserPrivileges open={setModalOpen} ></UserPrivileges>
                           <UserPrivileges open={setModalOpen} ></UserPrivileges>
                           <UserPrivileges open={setModalOpen} ></UserPrivileges>
                           <UserPrivileges open={setModalOpen} ></UserPrivileges>
                           <UserPrivileges open={setModalOpen}  ></UserPrivileges>
                           <UserPrivileges open={setModalOpen} ></UserPrivileges>
                        </div>

                        
                </div>
          </div> 

        
          { modalOpen && <ConfirmationModal close={setModalOpen} state={modalOpen}/>}
        </div>
    )
}

export default ManageVisitors



function UserPrivileges({children,...element}) {

    const {open} = element;

    return (
            <div className={Styles.user_container}>
                                <p>KLS5XSLOA662</p>
                                <p>Madi</p>
                                <p>Samy</p>
                                <p>Medecin</p>
                                <img title="Supprimer" src={Delete} onClick={()=>open(true)} />
            </div>
    )
}


