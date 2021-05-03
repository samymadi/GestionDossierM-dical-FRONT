import {useState} from 'react'
import '../Styles/AuthenticationsStyle/Authentication.css'
import SignIn from "../Component/AuthenticationComponent/SignIn"
import Login from "../Component/AuthenticationComponent/Login"


function Authentication() {

//---------------Variables State Style-------------------------- 
    const [selectedBarStyle,setSelectedBarStyle] = useState("selected-bar-style selected-Connexion");
    const [ConnexionSelectedStyle,setTConnexionitleSelectedstyle] = useState("selected-title");
    const [InscriptionSelectedStyle,setInscriptionTConnexionitleSelectedstyle] = useState("");
//---------------Variavles State---------------------------------

const [LoginOrSignin,setLoginOrSignin]= useState(true);



//---------------Event Listenner-----------------------------------
    const ConnexionClick = ()=>{
        setSelectedBarStyle("selected-bar-style selected-Connexion")
        setTConnexionitleSelectedstyle("selected-title");
        setInscriptionTConnexionitleSelectedstyle("");
        setLoginOrSignin(true);
    }
    const InscriptionClick = ()=>{
        setSelectedBarStyle("selected-bar-style selected-Inscription")
        setInscriptionTConnexionitleSelectedstyle("selected-title");
        setTConnexionitleSelectedstyle("");
        setLoginOrSignin(false);
    }
    return (
        <div className='Authentication'>
            <main className="main">
                    <div className='illustration'></div>
                    <div className='login-singIn'>
                        <header>
                              <p onClick={ConnexionClick}   className={ConnexionSelectedStyle} >Connexion</p>  
                              <p onClick={InscriptionClick} className={InscriptionSelectedStyle}  >Inscription</p>
                              <div className={selectedBarStyle}></div>  
                        </header>

                        <main className="form-input">
                            {LoginOrSignin ? <SignIn></SignIn> : <Login></Login>}  
                        </main>
                            <p className="copy-right"> @CopyRight: droits  réservés 2021</p>


                    </div>
            </main>
        </div>
    )
}

export default Authentication  
