import {useEffect,useState} from 'react'
import { createPortal } from 'react-dom';


import Styles from './Loading.module.css';

function Loading({second}) {
    const {container,bulle,bulle_anime,second_color,modal} = Styles;

    const [bulle1,setBulle1] = useState("");
    const [bulle2,setBulle2] = useState("");
    const [bulle3,setBulle3] = useState("");

    const animateDuration= 300;

    const animatioChange =()=>{
        setBulle3("");
        setBulle1(bulle_anime) 
        setTimeout(()=>{
            setBulle1("");
            setBulle2(bulle_anime);
        },animateDuration)
        setTimeout(()=>{
            setBulle2("");
            setBulle3(bulle_anime);
        },animateDuration*2)
    }



    useEffect(()=>{

        animatioChange();

     setTimeout(()=>{       
        animatioChange();
        setInterval(()=>{
           animatioChange();   
        },animateDuration*3)
    },animateDuration*3)   

      

    },[])
    return createPortal(
     <div className={modal}>
        <div className={`${container} ${ second && second_color}` } >
            <div className={`${bulle} ${bulle1}`}></div>
            <div className={`${bulle} ${bulle2}`}></div>
            <div className={`${bulle} ${bulle3}`}></div>
           
        </div>
     </div>   
    ,document.body);
}

export default Loading 
