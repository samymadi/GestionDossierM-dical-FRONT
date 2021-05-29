import {useEffect,useState} from 'react';

import Styles from '../../Styles/Dashboard/NotifPopUp.module.css';

function NotifPopUp() {
    const {container,notif_list,animate,animate_final} = Styles;


    const [animation,setAnimation] =useState("");

    useEffect(()=>{
         setInterval(()=>setAnimation(animate));  
         setTimeout(()=>{setAnimation(animate_final)},600);
         return ()=>{setAnimation("")}   
    },[])

    return (
        <div className={ `${container} ${animation}`}>
            <p>Notifications</p>
            <div className={notif_list}>
               <NotifBox></NotifBox> 
               <NotifBox></NotifBox> 
               <NotifBox></NotifBox> 
               <NotifBox></NotifBox> 
               <NotifBox></NotifBox> 
            </div>
        </div>
    )
}

export default NotifPopUp



function NotifBox(){

    const {notif_box_container,notif_content,notif_date,new_notif_icon} = Styles;



  

    return (
        <div className={`${notif_box_container} `}>
                <p className={notif_content}>Votre rapple vient d'expirer</p>
                <p className={notif_date}>2021-12-03  12:03</p>
                <div className={new_notif_icon}></div>
        </div>
    )
}
