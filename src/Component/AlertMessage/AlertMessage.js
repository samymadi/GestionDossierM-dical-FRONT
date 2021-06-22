import { useState,useEffect } from 'react';

import { createPortal } from 'react-dom';
import Styles from './AlertMessage.module.css';

import Delete from '../../Assests/Icons/Delete.png';
import Warning from '../../Assests/Icons/Warning.png';
import Error from '../../Assests/Icons/Error.png';
import SimpleMessage from '../../Assests/Icons/SimpleMessage.png'





function AlertMessage({...element}) {

    const {container,message,delete_icon,state_icon,reveal,disapear,warning,error} = Styles;

    const [animation,setAnimation] = useState();
    const [containerType,setContainerType] = useState();
    const [image,setImage] = useState(SimpleMessage);
    const {close,messageContent,type="message"}= element
    const [timeOutCloseID,setTimeOutCloseID] = useState();

    useEffect(()=>{
       if(type == "warning") {
           setContainerType(warning)
           setImage(Warning);
        }
            else if( type =="error"){
                setContainerType(error);
                setImage(Error)
            }


         setTimeout(() => {
            setAnimation(reveal);
         }); 

      setTimeOutCloseID( setTimeout(()=>{
           console.log("alert auto close");
           handleClose();   
         },6000)
      )

         
    },[])

    const handleClose =()=>{
        setAnimation(disapear);
        setTimeout(()=>{
            close(false);
        },200)
    }

    const onClose = (e)=>{
            e.stopPropagation(); 
            clearTimeout(timeOutCloseID);
            handleClose();    
    }

    
    return createPortal(
        (<div className={`${container} ${animation} ${containerType}`}>
            <img className={delete_icon} src={Delete} onClick={onClose} />
            <img className={state_icon} src={image} />
            <p className={message}>{messageContent}</p>
        </div>)
    ,document.body);
}

export default AlertMessage
