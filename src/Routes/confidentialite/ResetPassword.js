import {useState} from 'react'

import Styles from '../../Styles/Confidentialite/ResetPassword.module.css'
import Protection from '../../Assests/Icons/Protection.png'

import InputComponent from '../../Component/InputComponent/InputComponent'

function ResetPassword() {
    // -----------------State Variables------------------------------
    // --------------------------------------------------------------
    const [password,setPassword] = useState("");
    const [newPassword,setNewPassword] = useState("");
    const [confirmNewPassword,setConfirmNewPassword] = useState("");





    // -----------------EventListener------------------------------
    // ------------------------------------------------------------


    const handlePasswordChange = (data)=>{
            setPassword(data);
    }
    const handleNewPasswordChange = (data)=>{
            setNewPassword(data);
    }
    const handleConfirmNewPasswordChange = (data)=>{
            setConfirmNewPassword(data);
    }



    
    return (
       <div className={Styles.reset_password}>
            <div className={Styles.container}>
                <div className={Styles.inputs_container}>
                    <p>Réinitialiser votre mot de passe</p>
                    <InputComponent password={true} onChangeInput={handlePasswordChange} >{{placeholder:"Mot de passe actuel"}}</InputComponent>
                    <div>
                        <InputComponent password={true} onChangeInput={handleNewPasswordChange} >{{placeholder:"Nouveau Mot de passe"}}</InputComponent>
                        <InputComponent password={true}  onChangeInput={handleConfirmNewPasswordChange}  >{{placeholder:"Confirmer Mot de passe "}}</InputComponent>
                    </div>
                    <button className={Styles.button_input}>Confirmer</button>
                </div>
                <div className={Styles.container_img}>
                   <img src={Protection}/>
                </div>
            </div>
       </div>
    )
}

export default ResetPassword
