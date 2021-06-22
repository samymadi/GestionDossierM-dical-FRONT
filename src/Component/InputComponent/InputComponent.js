import {useState,useRef,useEffect} from 'react'
import Styles from './InputComponent.module.css'
import PwdVisible from '../../Assests/Icons/VisibiltyOn.png'
import PwdInVisible from '../../Assests/Icons/VisibiltyOff.png'


function InputComponent({children,...element}) {

    const {placeholder} = children; 
    const {maxLength,inputType,value,password,onChangeInput,errorMessage,errorTypeMessage,setErrorMessage,style} = element;

    // ----------------------------useState------------------------------
    const [visibility,setVisibility] = useState(password);
    const [condition,setCondition] = useState(false);
   
    
    

    // ----------------------------useRef---------------------------------
    const input = useRef();


    // ----------------------------useEffect-------------------------------
    useEffect(()=>{
        input.current.addEventListener('focusout',()=>setCondition(false));
        setVisibility(!password)
        
    },[])



    // ----------EventListnner ---------------------------------------------
    // ---------------------------------------------------------------------
    const handleVisibiltyChange = ()=>{
        setVisibility(prev=>!prev);
    }
    const handleFocus =(e)=>{
        setCondition(true);     
    }
    const handleOnChange = (event)=>{
        setErrorMessage(prev=>{
            prev.errorMessage='';
            return {...prev};
        });
        onChangeInput(event.target.value);
    }


               


    return (
        <div className={Styles.input_component} style={style}>
            <div  className={Styles.container +" " + ( condition ?  Styles.border : "" )}>
                <input onFocus={handleFocus} ref={input}  value={value}  type={!visibility ? "password" : inputType}  placeholder={placeholder} onChange={handleOnChange} maxLength={maxLength} max="2021-01-01" />
                <img style={{display: (!password || password == undefined ? "none": "")}}  src={!visibility ? PwdVisible : PwdInVisible} onClick={handleVisibiltyChange}/>
            </div>
            <p className={`${Styles.simple_message} ${errorTypeMessage == "warningMessage" ? Styles.warning_message : Styles.error_message}`} style={{visibility:(errorMessage ? "visible" :"hidden" )}}>{errorMessage || "."}</p>
        </div>
    )
}

export default InputComponent
