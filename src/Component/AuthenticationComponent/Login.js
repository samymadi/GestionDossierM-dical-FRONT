import {useEffect,useState} from 'react'
import "../../Styles/AuthenticationsStyle/Login-Signin.css"
import Checkbox from '../ControlComponent/Checkbox/Checkbox' 
function Login() {

    const [animationClass,setAnimationClass] = useState("signin-login");

    useEffect(()=>{
        setAnimationClass("signin-login-anime");
    },[])


    return (
        <div className={animationClass}>
            <form>
                <p>Email</p>
                <div className="container-input">
                    <input type="email"/>
                </div>
                <div className="confirmation-password">
                    <div>
                        <p>Password</p>
                        <div className="container-input login-form">
                            <input type="password"/>
                        </div>
                    </div>
                    <div>
                        <p>Confirmer</p>
                        <div className="container-input login-form">
                            <input type="password"/>
                        </div>
                    </div>
                </div>
                <div className="additional-info">
                    <Checkbox>Accepter les termes et les conditions</Checkbox>
                </div>

                <button className="submit-button">S'inscrire</button>
                
            </form>
        </div>
    )
}

export default Login
