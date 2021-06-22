import React,{useState,useEffect} from 'react'
import Styles from '../../Styles/Account/MainSettings.module.css';
import Pic from '../../Assests/Login-img.jpg'





// ------------------------Import Component---------------------------------------
import ButtonStyle from '../ButtonComponent/ButtonsStyle'
import Modal  from "../Modals/UpdateUserModal";

function Profile({user}) {

    const  {nom,prenom,lieuNaissance,adresse,telephone,sexe}= user;
    const  [dateNaissance,setDateNaissance]=useState();
    // -----------------------------------State Variables----------------------------------
    // ------------------------------------------------------------------------------------
    const [openModal,setOpenModal] =useState(false);
   

    useEffect(()=>{
        if(user.dateNaissance)
       { const date=  new Date(user.dateNaissance).toJSON().substring(0,10);
        setDateNaissance(date);
       }
        
    },[])
      

    
   

    return (
        <div id="Profile"  className={Styles.profile}>
            <p className={Styles.title}>Informations Personnelles</p>
            <p className={Styles.sub_title}></p>
          <div className={Styles.container_profile}>  
                <div className={Styles.update_photo}>
                    <p>Changer la photo de profile</p>
                
                    <img src={Pic} />
                </div>
          
                
                <div className={Styles.informations_data}>
                    <div>
                        <p>Nom<span>{nom && nom}</span></p>
                        <p>Prenom<span>{prenom && prenom}</span></p>
                        <p>Date de naissance<span>{dateNaissance && dateNaissance}</span></p>
                    </div>  
                        <p>Lieu de naissance <span>{lieuNaissance && dateNaissance}</span></p>
                        <p>Sexe<span>{sexe === true? "Homme" : "Femme" }</span></p>
                        <p>Téléphone<span>{telephone !='null' && telephone}</span></p>
                        <p>Adresse<span>{adresse !='null'  && adresse}</span></p>
                </div>
                <ButtonStyle className={Styles.button} type='primary' eventclick={()=>{setOpenModal(true)}}>Modifier</ButtonStyle>
         </div>
          { openModal  &&  <Modal user={user} setOpenModal={setOpenModal} ></Modal>}
        </div>
    )
}

export default Profile;
