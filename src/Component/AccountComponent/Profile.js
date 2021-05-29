import React,{useState} from 'react'
import Styles from '../../Styles/Account/MainSettings.module.css';
import Pic from '../../Assests/Login-img.jpg'



// ------------------------Import Component---------------------------------------
import ButtonStyle from '../ButtonComponent/ButtonsStyle'
import Modal  from "../Modals/UpdateUserModal";


function Profile() {

    // -----------------------------------State Variables----------------------------------
    // ------------------------------------------------------------------------------------
    const [openModal,setOpenModal] =useState(false);


   

    return (
        <div id="Profile"  className={Styles.profile}>
            {/* <p className={Styles.title}>Profile</p> */}

          <div className={Styles.container_profile}>  
                <div className={Styles.update_photo}>
                    <p>Changer la photo de profile</p>
                
                    <img src={Pic} />
                </div>
          <p className={Styles.sub_title}>Informations Personnelles :</p>
                
                <div className={Styles.informations_data}>
                    <div>
                        <p>Nom<span> Madi</span></p>
                        <p>Prenom<span> Samy</span></p>
                        <p>Date de naissance<span> 12/07/1999</span></p>
                    </div>  
                    <p>Lieu de naissance <span>El-Ebiar</span></p>
                    <p>Sexe<span>Homme</span></p>
                    <p>Téléphone<span>0555300442</span></p>
                    <p>Adresse<span>Cite la concorde BT G N 10 birmourad rais alger </span></p>
                </div>
                <ButtonStyle className={Styles.button} type='primary' eventclick={()=>{setOpenModal(true)}}>Modifier</ButtonStyle>
         </div>
          { openModal  &&  <Modal setOpenModal={setOpenModal} ></Modal>}
        </div>
    )
}

export default Profile;
