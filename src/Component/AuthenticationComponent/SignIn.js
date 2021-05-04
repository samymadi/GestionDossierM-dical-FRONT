import {Link} from 'react-router-dom'
import {useEffect,useState} from 'react'
import Checkbox from '../ControlComponent/Checkbox/Checkbox.js'
import '../../Styles/AuthenticationsStyle/Login-Signin.css'


function SignIn(){

    const [animationClass,setAnimationClass]= useState("signin-login-connexion")

    useEffect(()=>{
        setAnimationClass("signin-login-anime")
    },[])

    return (
        <div className={animationClass}>

            <div>
                <form>
                    <div className="input-container">
                        <input type="email" placeholder="Email"/>
                    <p><span style={{textAlign:"center",color:'red',display:"hidden"}}>Veuillez saisir votre email</span></p>
                    </div>
                    <div className="input-container">
                        <input type="password" placeholder="password"/>
                        <p><span style={{textAlign:"center",color:'red'}}>Veuillez saisir votre email</span></p>
                        
                    </div>
                    <div className="input-container input-more">
                        <Checkbox>Remember Me</Checkbox>
                        <Link className="forgot-password">Mot de passe oublié ?</Link>
                    </div>

                    <button className="button-input">Connecter</button>
                    <p className="goto-Login">Vous avez pas de compte ? <span>Inscrivez-vous</span></p>
                </form>
            </div>  


         
        </div>
    )
}

export default SignIn ;
