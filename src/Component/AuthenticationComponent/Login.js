import {useEffect,useState} from 'react'
import Styles from  "../../Styles/AuthenticationsStyle/Login-Signin.module.css"
import Checkbox from '../ControlComponent/Checkbox/Checkbox' 
function Login() {

    const [animationClass,setAnimationClass]= useState(Styles.signin_login_inscription);

    useEffect(()=>{
        setAnimationClass(Styles.signin_login_anime)
    },[])


    return (
        <div className={animationClass}>

            <form>
                <div className={Styles.input_container}>
                    <input type="email" placeholder="Email"/>
                    <p className={Styles.warning_message}>Email</p>
                </div>
                <div className={Styles.input_password_container}>
                    <div className={`${Styles.input_container} ${Styles.input_container_login}`}>
                        <input type="password" placeholder="Password"/>
                        <p>Password</p>
                    </div>
                    <div className={`${Styles.input_container} ${Styles.input_container_login}`}>
                        <input type="password" placeholder="Confirmer"/>
                        <p>Confirmer</p>

                    </div>
                </div>
                <div className={Styles.input_container}>
                 <Checkbox>Accepter les termes et les conditions</Checkbox>
                </div>
                <button className={Styles.button_input}>S'inscrire</button>
                <p className={Styles.goto_Login}>Vous avez deja un Compte ? <span>Connextez-vous</span></p>
            </form>

          
        </div>
    )
}

export default Login
