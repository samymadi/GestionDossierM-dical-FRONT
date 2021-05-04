import {useEffect,useState} from 'react'
import "../../Styles/AuthenticationsStyle/Login-Signin.css"
import Checkbox from '../ControlComponent/Checkbox/Checkbox' 
function Login() {

    const [animationClass,setAnimationClass]= useState("signin-login-inscription")

    useEffect(()=>{
        setAnimationClass("signin-login-anime")
    },[])


    return (
        <div className={animationClass}>

            <form>
                <div className='input-container'>
                    <input type="email" placeholder="Email"/>
                    <p className="warning-message">Email</p>
                </div>
                <div className="input-password-container">
                    <div className=" input-container input-container-login">
                        <input type="password" placeholder="Password"/>
                        <p>Password</p>
                    </div>
                    <div className="input-container input-container-login">
                        <input type="password" placeholder="Confirmer"/>
                        <p>Confirmer</p>

                    </div>
                </div>
                <div className="input-container" >
                 <Checkbox>Accepter les termes et les conditions</Checkbox>
                </div>
                <button className="button-input">S'inscrire</button>
                <p className="goto-Login">Vous avez deja un Compte ? <span>Connextez-vous</span></p>
            </form>

          
        </div>
    )
}

export default Login
