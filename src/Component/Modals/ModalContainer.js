import {useState, useEffect} from 'react'

import {createPortal} from "react-dom";

import Styles from '../../Styles/Modals/ModalContainer.module.css';


import Delete from '../../Assests/Icons/Delete.png';

function ModalContainer({children,options}) {
    
    const {container,modal_container,animate,animate_back,content_container,delete_img}  = Styles;
    
    const {setModalOpen,contentContainerSize} = options.element;
    console.log("rappel",contentContainerSize)
    

    const [animation,setAnimation] =useState("");
    const [animationModal,setAnimationModal] =useState("");


    useEffect(()=>{
        setTimeout(()=>{
            setAnimation(animate_back);
            setAnimationModal(animate);
        });
    },[])

    return createPortal(
        <div className={`${container} ${animation}`} onClick={()=>setModalOpen(false)}>
                <div className={`${modal_container} ${animationModal}`} style={contentContainerSize} onClick={(e)=>e.stopPropagation()}>
                        <img className={delete_img} src={Delete} onClick={()=>setModalOpen(false)} />
                        {children}
                </div>
            
        </div>
    ,document.body)
}

export default ModalContainer;
