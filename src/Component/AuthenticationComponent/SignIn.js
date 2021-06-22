import {Link,useHistory} from 'react-router-dom'
import Cookies from 'js-cookie';

import {useEffect,useState,useMemo} from 'react'
import Checkbox from '../ControlComponent/Checkbox/Checkbox.js'
import InputComponent from '../InputComponent/InputComponent'
import  Styles from '../../Styles/AuthenticationsStyle/Login-Signin.module.css'
import axios from 'axios';
import {HttpRequest,SessionCookie,Authentification} from '../../Models/User';


function SignIn({setLoginOrSignin}){
    
    const history = useHistory();

    // -----------------------State Varibales----------------------------
    // ------------------------------------------------------------------
    const [email,setEmail] = useState("");
    const [password,setPassword] =useState("");
    const [errorEmail,setErrorEmail] = useState({errorMessage:"",errorTypeMessage:"warningMessage"});
    const [errorPassword,setErrorPassword] =useState({errorMessage:"",errorTypeMessage:"warningMessage"})

     

    const [animationClass,setAnimationClass]= useState(Styles.signin_login_connexion);

    // ------------------UseEffect--------------------------------------------
     // -----------------------------------------------------------------------

    useEffect(()=>{
        setAnimationClass(Styles.signin_login_anime)
    },[])


    // ------------------Functions--------------------------------------------
     // ----------------------------------------------------------------------


     function checkInputs(){
            if(!email.trim()){
                setErrorEmail(prev=>{
                    prev.errorMessage='Veuillez saisir votre email';
                    return {...prev};
                
                })
                return false;
            }
                else if(!password){
                    setErrorPassword(prev=>{
                        prev.errorMessage='Veuillez saisir votre mot de passe';
                        return {...prev};
                    })
                    return false;
                }

        return true;
     }

     // --------------ApiCall-------------------------------------------
    // -----------------------------------------------------------------

  async function SigninApi(){
         const perfectEmail = email.trim().toLowerCase();
         const authentification = new Authentification(perfectEmail,password); 
         const request = new HttpRequest(authentification,"cookies");
         console.log(request);
       await axios.post("http://localhost:8000/authentification/Signin",request)
             .then(result=>{
                 console.log("oke");
                    if(result.status === 204)
                        setErrorEmail({errorMessage:"Email ou mot de passe incorrecte",errorTypeMessage:"errorMessage"}) 
                            else if(result.status === 200){
                                Cookies.set("Login",true,{expires:7});
                                Cookies.set("SessionAuth",new SessionCookie(result.data.data.Session_Id,result.data.data.Id_User),{expires:7})
                                history.go("/dashboard");
                            } else {
                                console.log(result.status);
                            }
             }) 
             .catch(err=>console.log("err"))
     }
     


    // --------------EventListener-------------------------------------- 
    // -----------------------------------------------------------------



    const handleClickSignin = (e)=>{
        e.preventDefault();
       if(!checkInputs()) return; 
            SigninApi();   
    }

    const handleGoToLogin = ()=>{
        setLoginOrSignin(false);
    }

    const handleForgotPassword =()=>{
        history.push("/ConfirmEmail");
    }

    return (
        <div className={animationClass}>

            <div>
                <form>
                    <InputComponent {...errorEmail} setErrorMessage={setErrorEmail} onChangeInput={setEmail} >{{placeholder:"Email"}}</InputComponent>        
                    <InputComponent {...errorPassword} setErrorMessage={setErrorPassword} onChangeInput={setPassword} password={true}>{{placeholder:"Password"}}</InputComponent>        
                

                   

                    <div className={`${Styles.input_container} ${Styles.input_more}`}>
                        <Checkbox>Remember Me</Checkbox>
                        <Link className={Styles.forgot_password} onClick={handleForgotPassword}>Mot de passe oublié ?</Link>
                    </div>

                    <button className={Styles.button_input} onClick={handleClickSignin}>Connecter</button>
                    <p className={Styles.goto_Login}>Vous avez pas de compte ? <span onClick={handleGoToLogin}>Inscrivez-vous</span></p>
                </form>
            </div>  


         
        </div>
    )
}

export default SignIn ;
