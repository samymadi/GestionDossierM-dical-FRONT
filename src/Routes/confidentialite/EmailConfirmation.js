import {useState} from 'react';

import Styles from '../../Styles/Confidentialite/EmailConfirmation.module.css'
import Email_Notification from '../../Assests/Svg/email-notification.svg'

function EmailConfirmation() {
    return  (
        
        <div className={Styles.email_confirmation}>
              <div className={Styles.container}>
                    <img src={Email_Notification}/>
                    <p>Verifiez votre boite Email</p>
                    <p>Un Email de vérification avec un code a été envoyé a <br /> <span> samymadi187@gmail.com </span></p>
                    <input maxLength="6" type="text" placeholder=""/>
                    <button>Verifier</button>
                    <p>Renvoyer le code ?</p>
              </div>
        </div> 
    )
}

export default EmailConfirmation;




function SendEmail(){
    const {send_email_container} =Styles; 
    return (
        <div className={send_email_container}>
            <p>Pour récuperer votre mot de passe saisissez votre email</p>
        </div>
    )
}
