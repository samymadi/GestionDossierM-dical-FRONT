import React,{useEffect,useState} from 'react'
import Styles from '../../Styles/Account/MainSettings.module.css'


// ------------------------------Component Imports---------------------------------
import Profile from './Profile'
import Parametres from './Parametres'
import Informations from './Informations'
import Loading from '../Loading/Loading';


import axios from 'axios';
import {User,HttpRequest} from '../../Models/User';
import Cookies from 'js-cookie';




function MainSettings() {

    const [animation,setAnimation] = useState("");
    const [loading,setLoading] = useState(true);
    const [user,setUser] = useState({});   


    async function getData(){
        const request = new HttpRequest("data",Cookies.getJSON("SessionAuth"));
        
        await axios.post("http://localhost:8000/account/UserData",request)
        
        .then(result=>{
            if(result.status !== 200)
                console.log("erreur",result);
                    else {  
                        let {nom,prenom,dateNaissance,lieuNaissance,adresse,telephone,sexe} = result.data.data;
                        setUser(new User(nom,prenom,dateNaissance,lieuNaissance,adresse,telephone,sexe));
                    }
                    setLoading(false);
        })
        .catch(err=>{console.log(err);setLoading(false)}) 
    }

    useEffect(()=>{        
        
       setTimeout(()=>{setAnimation(Styles.animation2)})   
       getData();

    },[])

    if(loading) 
    return <Loading second></Loading>

    return (
        <div className={`${Styles.main_settings} ${animation}`}>
                    <Profile user={user}></Profile>
                    <Parametres></Parametres>
                    <Informations></Informations>
                   
        </div>
    )
}
export default MainSettings
