import {useEffect,useState} from 'react'
import {useHistory} from 'react-router-dom';
import Styles from  "../../Styles/AuthenticationsStyle/Login-Signin.module.css"

// ------------------Tirces Bib--------------------------------------------
import axios from 'axios';    
import Cookies from 'js-cookie'

 // ------------------Functions Imports--------------------------------------------
import {verifiyData} from '../../Utils/Functions';
import {HttpRequest,SessionCookie,Authentification} from '../../Models/User';


 // ------------------Component Imports--------------------------------------------

import Checkbox from '../ControlComponent/Checkbox/Checkbox' 
import InputComponent from '../InputComponent/InputComponent'



function Login({setLoginOrSignin}) {
    const history = useHistory();

    // ------------------ State Variables--------------------------------------------
    // ------------------------------------------------------------------------------

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    const [errorEmail,setErrorEmail] =useState({errorMessage:"",errorTypeMessage:"warningMessage"})
    const [errorPassword,setErrorPassword] =useState({errorMessage:"",errorTypeMessage:"warningMessage"})
    const [errorConfirmPassword,setErrorCnfirmPassword] =useState({errorMessage:"",errorTypeMessage:"warningMessage"})
    const [animationClass,setAnimationClass]= useState(Styles.signin_login_inscription);


    


     // ------------------ useEffect--------------------------------------------
     // ------------------------------------------------------------------------

    useEffect(()=>{
        setAnimationClass(Styles.signin_login_anime)
    },[])


    
     // ------------------Functions--------------------------------------------
     // -----------------------------------------------------------------------
        function CheckInputs(){
           let {em,pass,cpass} = {email,password,confirmPassword}
           em=email.trim(); //Supprimer les blancs et les espaces
           pass=password;
           cpass=confirmPassword

           if(!em) {setErrorEmail(prev=>{
               prev.errorMessage="Veuillez saisir votre Email";
               return {...prev};
           }); return false;}
                else if(!pass){ setErrorPassword(prev=>{
                    prev.errorMessage="Veuillez saisir un mot de pssse";
                    return {...prev};
                }); return false;}
                    else if(pass.length <= 7)
                   { setErrorPassword(prev=>{
                        prev.errorMessage="*doit contenir au moins 8 caracteres";
                        return {...prev};
                    });return false}
                        else if(!cpass)
                        {setErrorCnfirmPassword(prev=>{
                            prev.errorMessage="Veuillez confirmer votre mot passe";
                            return {...prev};
                        }); return false;}
                            else if(cpass !==pass){setErrorPassword(prev=>{
                                prev.errorMessage="mot de passe non identique";
                                return {...prev};
                            });return false}
           
                return true;              
        }

       async function LoginApi(){
            const perfectEmail = email.trim().toLowerCase();
            const authentification = new Authentification(perfectEmail,password);
            const request = new HttpRequest(authentification,"cookies");
            await axios.post("http://localhost:8000/Authentification/Login",request)
                 .then(result=>{
                     if(result.status == 201) 
                     setErrorEmail(prev=>{
                        prev.errorMessage="Email deja Existant";
                        return {...prev};
                    }); 
                        else {
                            console.log(result);
                            Cookies.set("Login",true,{expires:7});
                            Cookies.set("SessionAuth",new SessionCookie(result.data.data.Session_Id,result.data.data.Id_User),{expires:7})
                            history.go("/dashboard");
                        }
                        
                        
                 })
                 .catch(err=>console.log(err));   
        }
    




    // -------------------EventListener---------------------------------
    // -----------------------------------------------------------------

   

    //On Click S'inscrire
    const  handleLogin = async (e)=>{
        e.preventDefault(); //Prevenir le fonctionement par default du form
       if(!CheckInputs()) return
            LoginApi();
    }

    const handleGoToSignin = ()=>{
        setLoginOrSignin(true);
    }


    return (
        <div className={animationClass}>

            <form>
                <InputComponent {...errorEmail} setErrorMessage={setErrorEmail} onChangeInput={setEmail}>{{placeholder:"Email"}}</InputComponent>  
                <div className={Styles.input_password_container}>
                    <InputComponent {...errorPassword} setErrorMessage={setErrorPassword} onChangeInput={setPassword}  password={true}>{{placeholder:"Password"}}</InputComponent>  
                    <InputComponent {...errorConfirmPassword} setErrorMessage={setErrorCnfirmPassword} onChangeInput={setConfirmPassword}  password={true} >{{placeholder:"Confirmer"}}</InputComponent>  
                </div>

                <div className={Styles.input_container}>
                     <Checkbox>Accepter les termes et les conditions</Checkbox>
                </div>
                <button className={Styles.button_input} onClick={handleLogin} >S'inscrire</button>
                <p className={Styles.goto_Login}>Vous avez deja un Compte ? <span onClick={handleGoToSignin}>Connectez-vous</span></p>
            </form>

          
        </div>
    )
}

export default Login
