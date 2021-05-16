import Styles from '../../Styles/HomeVitrine/VitrineContent.module.css'

// ------Images&Icons----------------------------------------------
import Earth_Corona from '../../Assests/Icons/CoronaIcons/Earth_Corona.png'
import Patient from '../../Assests/Icons/CoronaIcons/Patient.png'
import Social_Distance from '../../Assests/Icons/CoronaIcons/Social_Distance_6ft.png'
import Communication  from '../../Assests/Svg/Communication.svg'
import MobileApp  from '../../Assests/Svg/MobileApp.svg'
import FileGestion  from '../../Assests/Svg/FileGestion.svg'
import Rappls_Notifications  from '../../Assests/Svg/Rappls_Notifications.svg'
import Protection  from '../../Assests/Icons/CoronaIcons/Protection.png'

//
import {useHistory} from 'react-router-dom'

function VitrineContent() {

    const history = useHistory();

    // Handle Event Listener ------------------------------------------------------

    const handleClickSignin =()=>{
        history.push("/Authentication/true")   
    }
    const handleClicklogin =()=>{
        history.push("/Authentication/false")
    }
    return (
        <div className={Styles.vitrine_content}>

            <article className={Styles.home_article}>
                    <div className={Styles.container_info}>
                            <p>EMedical la première platforme digitalisé <br /> de Gestion du dossier Médical en Ligne</p>
                            <div className={Styles.container_button}>
                                <button className={`${Styles.button} ${Styles.btn_signin}`} onClick={handleClickSignin}>Connexion</button>
                                <button className={`${Styles.button} ${Styles.btn_login}`} onClick={handleClicklogin}>Inscription</button>
                            </div>  
                    </div>

                    <div className={Styles.container_image}>
                            <img src={FileGestion}  />
                    </div>
            </article>
            <article className={Styles.corona_article}>
                <div className={Styles.container_icon}>
                    <img src={Protection}/>
                </div>
                <div className={Styles.container_details}>
                    <p>Ensemble pour lutter contre le <span>Covid-19</span> <br />
                       Respectons les gestes barrières... <br />
                       Pour plus de détails visitez <a href="https://www.google.com" target="_blank">Covid-19.Com</a>     
                    </p>
                </div>
            </article>


            <article className={Styles.presentation}>
                    <p>Ce que EMedical vous propose </p>
                    <div className={Styles.presentaions_main}>
                            <div className={Styles.container}>
                                
                                <img src={MobileApp} />
                                <p><span>1. </span>Votre Dossier a tout moment n'importe ou</p>
                                <p>Acceder a votre dossier Médical n'importe ou a tout moment</p>
                            </div>
                            <div className={Styles.container}>
                                
                                <img src={Communication}/>
                                <p><span>2. </span>Communication entre professionnels</p>
                                <p>Une Messagerie specialement faite et dédié au professionnels pour des echanges d'informations </p>
                            </div>
                            <div className={Styles.container}>
                                
                                <img src={FileGestion}/>
                                <p><span>3. </span>Gestion du dossier</p>
                                <p>Modifier Supprimer des analyse avec EMedicale oubliez la papras</p>
                            </div>
                    </div>
            </article>


            <article>
                    
            </article>
        </div>
    )
}

export default VitrineContent
