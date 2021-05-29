import React,{useEffect,useState} from 'react'
import {createPortal} from "react-dom"
import Styles from "../../Styles/Modals/ConfirmationModal.module.css";


import Delete from "../../Assests/Icons/Delete.png";


// ----------------------------Component Imports---------------------------
import ButtonStyle from "../ButtonComponent/ButtonsStyle";

function ConfirmationModal({children,...element}) {


    const {confirmation_modal,modal_container,buttons,cancel_btn,data_container,modal_message}= Styles;

    const {close,modalopen}= element;

    const [animationStyle,setAnimationStyle]= useState("");
    const [animationBackStyle,setAnimationBackStyle] =useState("");

    useEffect(()=>{
       setTimeout( ()=>{setAnimationStyle(Styles.animate)
                setAnimationBackStyle(Styles.animate_back);
    })

    },[])

    
    return createPortal (
        <div onClick={()=>close()} className={`${confirmation_modal}  ${animationBackStyle} `}>
                <div   className={`${modal_container} ${animationStyle}`}  onClick={(e)=>e.stopPropagation()}>
                    <img onClick={()=>close()} src={Delete} />
                    <div className={modal_message}>
                        <p>Supprimer ce contact ?</p>
                        <p>Supprimer ce contact il n'aura pas la posibilité d'acceder a votre compte</p>
                    </div>
                    <div className={data_container}>
                       <div>
                            <span> <p>Nom:</p> <p>Abderhmane salim</p></span>
                            <span> <p>Prenom:</p> <p>Abd alllilah</p></span>
                       </div> 

                       <div>
                            <span> <p>ID:</p> <p>IOFC554S</p></span>
                            <span> <p>Type:</p> <p>Laboratoire</p></span>
                       </div>
                    </div>
                    <div className={buttons}>
                        <button onClick={()=>close()} className={cancel_btn} >Annuler</button>
                        <button onClick={()=>close()} className={cancel_btn} >Confirmer</button>
                        {/* <ButtonStyle className={Styles.confirm_btn}>Confirmer</ButtonStyle> */}
                    </div>
                </div>
        </div>
    ,document.body);
}

export default ConfirmationModal
