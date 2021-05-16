import {useState} from 'react'

import Styles from '../../Styles/Confidentialite/ResetPassword.module.css'
import CyberSecurity from '../../Assests/Icons/CyberSecurity.png'

function ResetPassword() {


    
    return (
       <div className={Styles.reset_password}>
            <div className={Styles.container}>
                <div className={Styles.inputs_container}>
                    <p>Réinitialiser votre mot de passe</p>
                    <input type="text" placeholder="Mot de passe actuel" />
                    <div>
                        <input type="password" placeholder="Nouvreau mot de passe"  />
                        <input type="password"  placeholder="Confirmer"/>
                    </div>
                </div>
                <div className={Styles.container_img}>
                   <div className={Styles.separation}></div>
                   <img src={CyberSecurity}/>
                </div>
            </div>
       </div>
    )
}

export default ResetPassword
