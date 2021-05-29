import {useState,useRef,useEffect} from 'react';

import Styles from './InputStyle.module.css';

function InputStyle({...element}) {
    const {input_container,input_name_container,input,focus} = Styles;

    const {className,style,type,placeholder,value,setValue}= element;
    console.log(style);

    // --------------------------State Varibales--------------------------
    // -------------------------------------------------------------------
    const [focusClass,setFocusClass] = useState();

      // --------------------------useRef--------------------------
    // -------------------------------------------------------------------

    const containerInput = useRef();

      // --------------------------useEffect------------------------------
    // -------------------------------------------------------------------


    
    useEffect(()=>{
       containerInput.current.addEventListener("focusout",handleFocusOut);
    },[])
    // --------------------Event Listener---------------------------------------- 
    // --------------------------------------------------------------------------


    const handleFocusOn = ()=>{
        setFocusClass(focus);
    }

    const handleFocusOut = ()=>{
        setFocusClass("");
    }

    
    const handleOnChange = (e)=>{
        setValue(e.target.value);
    }

    return (
        <div  className={` ${className} ${input_container} ${focusClass}`}   ref={containerInput} style={style} onFocus={handleFocusOn} >
            <div className={input_name_container}>
                <p>{placeholder}</p>
            </div>
            <input className={input} value={value} type={type} onChange={handleOnChange}  />
        </div>
    )
}

export default InputStyle
