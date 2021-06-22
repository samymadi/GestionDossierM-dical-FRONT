import {useState,useEffect} from 'react'
import {useParams,useHistory} from 'react-router-dom'
import  Styles  from '../Styles/AuthenticationsStyle/Authentication.module.css'
import  SignIn  from "../Component/AuthenticationComponent/SignIn"
import  Login   from "../Component/AuthenticationComponent/Login"


function Authentication() {

    const history = useHistory();


    const {signin} = useParams();
//---------------Variables State Style-------------------------- 
    const [LoginOrSignin,setLoginOrSignin]= useState((signin === "true" ?  true : false));

// //---------------Variables State---------------------------------

// //---------------Event Listenner-----------------------------------
    const handleConnexionClick = ()=>{
        setLoginOrSignin(true);
    }
    const handleInscriptionClick = ()=>{
       
        setLoginOrSignin(false);
    }
    return (
        <div className={Styles.Authentication}>
            <main className={Styles.main}>


                <div className={Styles.container_img}></div>

                <div className={Styles.container_content}>
                        <header className={Styles.header_container}>
                            <div className={Styles.title_options}>
                                    <p  className={LoginOrSignin ? Styles.selected_title: ""}  onClick={handleConnexionClick}>Connexion</p>
                                    <p  className={!LoginOrSignin ? Styles.selected_title: ""}  onClick={handleInscriptionClick}>Inscription</p>
                                    <span className={Styles.selected_bar+" "+ (LoginOrSignin ? Styles.selected_Connexion: Styles.selected_Inscription)}></span>
                            </div>
                        </header>
                        <main className={Styles.form_container}>
                            {LoginOrSignin ? <SignIn setLoginOrSignin={setLoginOrSignin}></SignIn> : <Login setLoginOrSignin={setLoginOrSignin}></Login> }
                        </main>
                        <footer className={Styles.footer_container}>
                            <p>@CopyRight 2021: Droits Réservés</p>
                        </footer>
                </div>


                 
            </main>
        </div>
    )
}

export default Authentication  
