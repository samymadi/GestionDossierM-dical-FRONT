import {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'
import Styles from '../../Styles/Account/MainSettings.module.css';
import {Switch} from '@material-ui/core'

// -------------------Component Imports--------------------------------

import ManageVisitors from "./ManageVisitors";
import ButtonStyle from '../ButtonComponent/ButtonsStyle'


// ----------------Bib import------------------------
import axios from 'axios';
// ----------------Picture Imports------------------------
import Email from '../../Assests/Icons/Email.png'
import Notifications from '../../Assests/Icons/Notifications.png'
import Message from '../../Assests/Icons/Message.png'


function Parametres() {

    const history = useHistory();
    const [message,setMessage] = useState();
    const [email,setEmail] = useState();
    const [notifcation,setNotification] = useState();




    useEffect(()=>{
        axios.post('');
    },[])




    // ---------------------------------EventListener------------------------------------------
    // ----------------------------------------------------------------------------------------
    
    
    const handleChangePasswordClick = ()=>{
            history.push("/ResetPassword");
    }
    return (
        <div id="Parametres" className={Styles.Parametres}>
            <p className={Styles.title}>Paramètres</p>
          <div className={Styles.container_param}>
                <div className={Styles.notifications}>
                    <p className={Styles.sub_title}>Notifications</p>
                        <div className={Styles.notif_container}>
                           <div>
                             <img src={Message} />
                             <p>Message</p>
                           </div>
                            <Switch className={Styles.switch} size="small"  ></Switch>
                        </div>
                        <div className={Styles.notif_container}>
                            <div>
                                <img src={Email}/>
                                <p>Email</p>
                            </div> 
                            <Switch className={Styles.switch} size="small" defaultChecked></Switch>
                        </div>
                        <div className={Styles.notif_container}>
                            <div>
                                <img src={Notifications}/>
                                <p>Notifications</p>
                            </div> 
                            <Switch className={Styles.switch} value size="small" defaultChecked></Switch>
                        </div>

                </div>

              

                <div className={Styles.confidentialite}>
                <p className={Styles.sub_title}>Confidentialité</p>

                    <div>
                        <ButtonStyle eventclick={handleChangePasswordClick}>Modifier le mot de passe </ButtonStyle>
                        <ButtonStyle>Generer un code d'acces </ButtonStyle>
                    </div>
                </div>
          </div>

    
        </div>
    )
}

export default Parametres
