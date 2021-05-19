import {useState,useEffect} from 'react'
import { useHistory,Link } from 'react-router-dom';
import Styles from '../../Styles/Account/Account.module.css'


// -------------Icons Import-------------------------------------
import Logout from '../../Assests/Icons/Logout.png'
import Settings from '../../Assests/Icons/Settings.png'
import Profile from '../../Assests/Icons/Profile.png'
import Report from '../../Assests/Icons/Report.png'

function Account() {





    // -----------------------EventListener--------------------------------------
    // --------------------------------------------------------------------------

    const handleClickProfile = ()=>{
        
    }
    const handleClickParametres = ()=>{

    }
    const handleClickInfo = ()=>{

    }
    return (
        <div className={Styles.account}>
         
                <aside> 
                    <div className={Styles.nav_container}>

                        <div className={Styles.container_element}>
                            <a href="#">
                                <div >
                                    <img src={Profile} />
                                    <p>Profile</p>
                                </div>
                            </a>
                            <a href="#">
                                <div>
                                    <img src={Settings} />
                                    <p>Parametres</p>
                                </div>
                            </a>
                            <a href="#">
                                <div>
                                    <img src={Report} />
                                    <p>Informations Medicales</p>
                                </div>
                            </a>
                            <div className={Styles.selected_bar}/>
                        </div>
                        <div className={Styles.separation}/> {/* Separation-------- */}  
                        <div className={Styles.container_element2}>
                            <p onClick={handleClickProfile}  >Demande d'identification</p>
                            <p onClick={handleClickParametres}  >Ajouter un document</p>
                            <p onClick={handleClickInfo} >Deconnexion</p>
                        </div>
                    </div>
                </aside>
                <main>
                    <div className={Styles.main_container}>
                            
                    </div>
                </main>
        </div>
    )
}

export default Account
