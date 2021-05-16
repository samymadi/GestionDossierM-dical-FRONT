import {useState,useRef,useEffect} from 'react'
import Styles from './InputComponent.module.css'
import PwdVisible from '../../Assests/Icons/VisibiltyOn.png'
import PwdInVisible from '../../Assests/Icons/VisibiltyOff.png'


function InputComponent({children,password}) {

    const {placeholder,inputTitle,messageType} = children;

    // ----------------------------useState------------------------------
    const [visibility,setVisibility] = useState(!password);
    const [condition,setCondition] = useState(false);
    const [errorMessage,setErrorMessage] = useState("error");
    const [errorMessageVisible,setErrorMessageVisible] = useState(true);
    const [errorTypeMessage,setErrorTypeMessage] = useState("warningMessage");

    // ----------------------------useRef---------------------------------
    const input = useRef();


    // ----------------------------useEffect-------------------------------
    useEffect(()=>{
        input.current.addEventListener('focusout',()=>setCondition(false));
        setVisibility(password)
    },[])

    // ----------EventListnner ---------------------------------------------
    const handleVisibiltyChange = ()=>{
            setVisibility(prev=>!prev);
    }
    const handleFocus =(e)=>{
     setCondition(true);     
    }

    return (
        <div className={Styles.input_component}>
            <div  className={Styles.container +" " + ( condition ?  Styles.border : "" )}>
                <input onFocus={handleFocus} ref={input}  type={visibility ? "password" : "text"}  placeholder={placeholder} />
                <img style={{display: (!password || password == undefined ? "none": "")}}  src={visibility ? PwdVisible : PwdInVisible} onClick={handleVisibiltyChange}/>
            </div>
            <p className={`${Styles.simple_message} ${errorTypeMessage == "warningMessage" ? Styles.warning_message : Styles.error_message}`} style={{visibility:(!errorMessageVisible ? "hidden" : "" )}}>{errorMessage}</p>
        </div>
    )
}

export default InputComponent
