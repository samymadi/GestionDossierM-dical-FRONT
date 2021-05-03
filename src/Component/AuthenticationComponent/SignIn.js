import {Link} from 'react-router-dom'
import {useEffect,useState} from 'react'
import Checkbox from '../ControlComponent/Checkbox/Checkbox.js'


function SignIn(){

    const [animationClass,setAnimationClass] = useState("signin-login");

    useEffect(()=>{
        setAnimationClass("signin-login-anime");
    },[])


    return (
        <div className={animationClass}>
          <form>
              <p>Email</p>
              <div className="container-input">
                  <input type="email" name="email"/>
              </div>
              <p>Password</p>

              <div className="container-input password-input">
                  <input type="password" name="password"/>
              </div>

              <div className="additional-info">
                  <Checkbox>Remember Me</Checkbox>  
                  <Link to="Sommewhere" className="forgot-password">Mot de passe oublié ?</Link>
              </div>

              <button className="submit-button" type="submit">Connecter</button>
          </form>

              <p className="redirect-login">Vous avez pas de Compte? <span>Inscivez-vous</span></p>
            
        </div>
    )
}

export default SignIn ;
