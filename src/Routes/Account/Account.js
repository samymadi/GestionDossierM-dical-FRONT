import {useState,useEffect} from 'react'
import { useHistory,Link } from 'react-router-dom';
import Styles from '../../Styles/Account/Account.module.css'


// ------------------Component Imports---------------------------
import MainSettings from "../../Component/AccountComponent/MainSettings"; 
import ManageVisitors from "../../Component/AccountComponent/ManageVisitors";
import ManageIdentifications from '../../Component/AccountComponent/ManageIdentifications';

// -------------Icons Import-------------------------------------
import Logout from '../../Assests/Icons/Logout.png'
import Settings from '../../Assests/Icons/Settings.png'
import Profile from '../../Assests/Icons/Profile.png'
import Report from '../../Assests/Icons/Report.png'


function Account() {

    
    // -----------------------State Variables--------------------------------------
    // --------------------------------------------------------------------------

    const [currentPage,setCurrentPage] = useState(<MainSettings/>);
    const [selectedBarPos,setSelectedBarPos] = useState("0px");
    const [selectedBarVisible,setSelectedBarVisible] =useState("hidden");


    // -----------------------EventListener--------------------------------------
    // --------------------------------------------------------------------------

        const handleClickTitle =(e)=>{
            const title = e.target.innerText;
            switch (title) {
                case "Demande d'identification": setCurrentPage(<ManageIdentifications/>); setSelectedBarPos("0"); setSelectedBarVisible("visible"); break;
                case "Privilèges d'accès" :setCurrentPage(<ManageVisitors/>); setSelectedBarPos("40px"); setSelectedBarVisible("visible"); break;    
                case "Deconnexion": break;
                default: setCurrentPage(<MainSettings/>); setSelectedBarVisible("hidden"); break;
            }
        }

   
    return (
        <div className={Styles.account}>
         
                <aside> 
                    <div  className={Styles.nav_container}>

                        <div className={Styles.container_element} onClick={handleClickTitle} >
                            <a href="#Profile">
                                <div >
                                    <img src={Profile} />
                                    <p>Profile</p>
                                </div>
                            </a>
                            <a href="#Parametres">
                                <div>
                                    <img src={Settings} />
                                    <p>Parametres</p>
                                </div>
                            </a>
                            <a href="#Informations">
                                <div>
                                    <img src={Report} />
                                    <p>Informations Medicales</p>
                                </div>
                            </a>
                            
                        </div>
                        <div className={Styles.separation}/> {/* Separation-------- */}  
                        <div className={Styles.container_element2}>
                            <p onClick={handleClickTitle}>Demande d'identification</p>
                            <p onClick={handleClickTitle}>Privilèges d'accès </p>
                            <p onClick={handleClickTitle}>Deconnexion  </p>
                            <div style={{transform:`translateY(${selectedBarPos})`,visibility: selectedBarVisible }} className={Styles.selected_bar}/>
                        </div>
                    </div>
                </aside>
                <main>
                    <div className={Styles.main_container}>
                            {currentPage}
                            
                    </div>
                </main>
        </div>
    )
}

export default Account
