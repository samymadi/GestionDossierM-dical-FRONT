import {Link} from 'react-router-dom'
import {useEffect,useState} from 'react'
import Checkbox from '../ControlComponent/Checkbox/Checkbox.js'
import  Styles from '../../Styles/AuthenticationsStyle/Login-Signin.module.css'


function SignIn(){

    const [animationClass,setAnimationClass]= useState(Styles.signin_login_connexion);

    useEffect(()=>{
        setAnimationClass(Styles.signin_login_anime)
    },[])

    return (
        <div className={animationClass}>

            <div>
                <form>
                    <div className={Styles.input_container}>
                        <input type="email" placeholder="Email"/>
                    <p><span style={{textAlign:"center",color:'red',display:"hidden" }}>Veuillez saisir votre email</span></p>
                    </div>
                    <div className={Styles.input_container}>
                        <input type="password" placeholder="password"/>
                        <p><span style={{textAlign:"center",color:'red'}}>Veuillez saisir votre email</span></p>
                        
                    </div>
                    <div className={`${Styles.input_container} ${Styles.input_more}`}>
                        <Checkbox>Remember Me</Checkbox>
                        <Link className={Styles.forgot_password}>Mot de passe oublié ?</Link>
                    </div>

                    <button className={Styles.button_input}>Connecter</button>
                    <p className={Styles.goto_Login}>Vous avez pas de compte ? <span>Inscrivez-vous</span></p>
                </form>
            </div>  


         
        </div>
    )
}

export default SignIn ;
