import {useState} from 'react'
import '../Styles/AuthenticationsStyle/Authentication.css'
import SignIn from "../Component/AuthenticationComponent/SignIn"
import Login from "../Component/AuthenticationComponent/Login"


function Authentication() {

//---------------Variables State Style-------------------------- 
    const [LoginOrSignin,setLoginOrSignin]= useState(true);
// //---------------Variavles State---------------------------------




// //---------------Event Listenner-----------------------------------
    const handleConnexionClick = ()=>{
        setLoginOrSignin(true);
    }
    const handleInscriptionClick = ()=>{
       
        setLoginOrSignin(false);
    }
    return (
        <div className='Authentication'>
            <main className="main">


                <div className="container-img"></div>

                <div className="container-content">
                        <header className="header-container">
                            <div className="title-options">
                                    <p  className={LoginOrSignin ? "selected-title ": ""}  onClick={handleConnexionClick}>Connexion</p>
                                    <p  className={!LoginOrSignin ? "selected-title": ""}  onClick={handleInscriptionClick}>Inscription</p>
                                    <span className={"selected-bar "+(LoginOrSignin ? "selected-Connexion": "selected-Inscription")}></span>
                            </div>
                        </header>
                        <main className="form-container">
                            {LoginOrSignin ? <SignIn></SignIn> : <Login></Login> }
                        </main>
                        <footer className="footer-container">
                            <p>@CopyRight 2021: Droits Réservées</p>
                        </footer>
                </div>


                 
            </main>
        </div>
    )
}

export default Authentication  
