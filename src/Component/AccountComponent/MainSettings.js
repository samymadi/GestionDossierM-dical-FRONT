import React,{useEffect,useState} from 'react'
import Styles from '../../Styles/Account/MainSettings.module.css'


// ------------------------------Component Imports---------------------------------
import Profile from './Profile'
import Parametres from './Parametres'
import Informations from './Informations'



function MainSettings() {

    const [animation,setAnimation] = useState("");

    useEffect(()=>{        
        
       setTimeout(()=>{setAnimation(Styles.animation2)})   
    },[])

    return (
        <div className={`${Styles.main_settings} ${animation}`}>
                    <Profile></Profile>
                    <Parametres></Parametres>
                    <Informations></Informations>
                   
        </div>
    )
}
export default MainSettings
