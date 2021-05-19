import {useEffect,useState} from 'react'
import Styles from  "../../Styles/AuthenticationsStyle/Login-Signin.module.css"
import Checkbox from '../ControlComponent/Checkbox/Checkbox' 
import InputComponent from '../InputComponent/InputComponent'
function Login() {

    // ------------------ State Variables--------------------------------------------
    // ------------------------------------------------------------------------------

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    const [animationClass,setAnimationClass]= useState(Styles.signin_login_inscription);

    useEffect(()=>{
        setAnimationClass(Styles.signin_login_anime)
    },[])



    // -------------------EventListener---------------------------------
    // -----------------------------------------------------------------

    const handleOnchangeEmail = (data)=>{
            setEmail(data);
    }
    const handleOnchangePassword = (data)=>{
            setPassword(data);
    }
    const handleOnchangeConfirmPassword = (data)=>{
            setConfirmPassword(data);
    }


    return (
        <div className={animationClass}>

            <form>
                <InputComponent onChangeInput={handleOnchangeEmail}>{{placeholder:"Email"}}</InputComponent>  
                <div className={Styles.input_password_container}>
                    <InputComponent onChangeInput={handleOnchangePassword}  password={true}>{{placeholder:"Password"}}</InputComponent>  
                    <InputComponent onChangeInput={handleOnchangeConfirmPassword} password={true} >{{placeholder:"Confirmer"}}</InputComponent>  
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
