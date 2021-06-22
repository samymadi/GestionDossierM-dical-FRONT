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


import Scene1 from '../../Assests/Svg/Scene1.svg'

//
import {useHistory} from 'react-router-dom'
import Cookies from 'js-cookie'


const {block2,covid_info,back_img,input_container} = Styles;

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
        <div  className={Styles.vitrine_content}>

            <article className={Styles.home_article}>
                    <div className={Styles.container_info}>
                            <p>EMedical la première platforme digitalisé <br /> de Gestion du dossier Médical en Ligne</p>
                            { Cookies.get("Login") !== "true" ?  <div className={Styles.container_button}>
                                <button className={`${Styles.button} ${Styles.btn_signin}`} onClick={handleClickSignin}>Connexion</button>
                                <button className={`${Styles.button} ${Styles.btn_login}`} onClick={handleClicklogin}>Inscription</button>
                            </div>  : <button className={`${Styles.button} ${Styles.btn_signin}`} onClick={handleClicklogin}>Acceder au Dashboard</button>
                                 }
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


            <article id="details" className={Styles.presentation}>
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
                                <p>Retrouver tous les documents médicaux d'un client dans un seul endroit</p>
                            </div>
                    </div>
            </article>


            <article className={block2}>
            <InformationsCadre title='MESSAGERIE'>
                Avec la messagerie EMedicale c'est facile elle vous permet de communiquer avec vous medecins en une touche
              <ol>
                  <li>Lancer des conversation</li>
                  <li>Recherche de Contacts Simplement</li>
                  <li>Bloquer des utilisateurs malveillant</li>
              </ol>   
            </InformationsCadre>   
            <InformationsCadre title='AUTO RAPPEL' >Programmer des rappels pour vous prevenir de l'approche d'un évenement ex: Rendez-vous chez un medecin,les analyses sonts prets pour les retirer
            un email vous sera envoyé a l'approche du reppel vous a tout momemnt supprimer modifer le rappel 
            </InformationsCadre>   
            <InformationsCadre title='CONFIANCE' >Avec l'indetification chque utilisaeur peut confirmer son indetification. Toujours crédible tous les Medecins Laboratoire sont vérifiés par notre
            site.    
              </InformationsCadre>   
            <InformationsCadre title='DOSSIER MEDICAL' >
            
            </InformationsCadre> 

  
                  <div className={input_container} >
                    <p>Abonnez vous a notre boite Email pour recevoir les nouvelles actualité du Covid-19 et de la santé Mondiale</p>
                   <div>
                        <input type="text" placeholder='email@gmail.com' />
                        <button>S'abonner</button>

                   </div>
                  </div>
             
  
            </article>

           
        </div>
    )
}

export default VitrineContent




const {cadre_container,cadre_title,cadre_text}=Styles;

function InformationsCadre({children,title}){
    return (
        <div className={cadre_container}>
                    <p className={cadre_title}>{title}</p>
                    <p className={cadre_text}>{children}</p>
        </div>
    )
}