import {Link} from 'react-router-dom'
import {useEffect,useState,useMemo} from 'react'
import Checkbox from '../ControlComponent/Checkbox/Checkbox.js'
import InputComponent from '../InputComponent/InputComponent'
import  Styles from '../../Styles/AuthenticationsStyle/Login-Signin.module.css'


function SignIn(){
    

    // -----------------------State Varibales----------------------------
    // ------------------------------------------------------------------
    const [email,setEmail] = useState("");
    const [password,setPassword] =useState("");

     

    const [animationClass,setAnimationClass]= useState(Styles.signin_login_connexion);

    useEffect(()=>{
        setAnimationClass(Styles.signin_login_anime)
    },[])


    // --------------EventListener-------------------------------------- 
    // -----------------------------------------------------------------

    const handleOnChangeEmail =(data)=>{
            setEmail(data);
    } 
    const handleOnChangePassword =(data)=>{
            setPassword(data);    
    } 

    return (
        <div className={animationClass}>

            <div>
                <form>
                    <InputComponent  onChangeInput={handleOnChangeEmail} errorMessage="" >{{placeholder:"Email"}}</InputComponent>        
                    <InputComponent  onChangeInput={handleOnChangePassword} password={true}>{{placeholder:"Password"}}</InputComponent>        
                

                   

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
