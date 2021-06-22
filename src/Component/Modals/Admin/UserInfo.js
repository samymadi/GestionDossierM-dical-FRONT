import React from 'react'
import Styles from '../../../Styles/Modals/Admin/UserInfo.module.css'; 
function UserInfo() {

    const {container,info,info_user,info_pro,control_container} = Styles;

    return (
        <div className={container}>
            <div className={info}>

                   <h3>Informations Personnelles</h3> 
                <div className={info_user}>
                   <p>ID :<span>KDORSLXSXKXSKXS</span></p>
                   <div>
                    <p>Nom :<span>Madi lorehdkhdskhdskhdskhdskj</span></p>
                    <p>Prenom :<span>Samy</span></p>
                   </div> 
                    
                    <div>
                    <p>Date de Naissance :<span>12/07/1999</span></p>
                    <p>Lieu de Naissance :<span>El Elbiar</span></p>
                    </div>
                    
                    <p>Adresse :<span>Cite 134 logementhdk lore</span></p>
                    <div>
                    <p>Téléphone :<span>0555300442</span></p>
                    <p>Sexe :<span>Homme</span></p>
                    </div>
                    <div>
                    <p>Type Compte :<span>Laboratoire</span></p>
                    <p>Laboratoire :<span>BioHealth</span> </p>
                    </div>  
                   
                </div>
                <h3>Informations Professionnelles</h3>
                <div className={`${info_pro} ${info_user}`}>
                    <div> 
                        <p> Nom Laboratoire :<span>BioHealth</span></p>
                        
                    </div>
                    <div>
                        <p>Adresse :<span>didouch alger</span></p>
                        <p>Télephone 1 :<span>0555368998</span></p>
                    </div>
                    <div>
                        <p>Télephone 2 :<span>0648676545</span></p>
                        <p>Télephone 3 :<span>0798463155</span></p>
                    </div>
                    
                    
                </div>
            </div>    
                <div className={control_container}>
                        <button>Bloquer</button>
                </div>
        </div>
    )
}

export default UserInfo 
