import React,{useState,useEffect} from 'react'
import {Route,useHistory} from "react-router-dom"
import {Link} from 'react-router-dom'
import Styles from '../../Styles/Dashboard/Dashboard.module.css';


// --------------------------------Component Imports----------------------------
import NotifPopUp from '../../Component/DashBoard/NotifPopUp';

// ------------------------------Icons Imports------------------------------------
import Notification from '../../Assests/Icons/Notifications.png';
import Settings from '../../Assests/Icons/Settings.png';
import DashBoardMenu from '../../Component/DashBoard/DashBoardMenu';
import DossierMed from '../../Component/DashBoard/DossierMed';



function Dashboard() {
    const {nav_bar,content_container,title_navigation,icons_buttons,icon_container,selected_bar,dashboard,test,selected_title} = Styles; 
    const location = useHistory().location.pathname.toLowerCase();
    
    // ----------------------------------------State Variables-----------------------------------
    // ------------------------------------------------------------------------------------------
    const [selectedBar,setSelectedBar] = useState({width: "90px"});
    const [displayNotif,setDispalyNotif] = useState(false);
    


    // ----------------------------------------Use Effect-----------------------------------
    // ------------------------------------------------------------------------------------------

    useEffect(() => {
        if(location == "/dashboard/dossiermedical")
            setSelectedBar({transform:"translateX(119px)",width:"121px"})
                else if(location =="/dashboard/message")
                    setSelectedBar({transform:"translateX(269px)",width:"75px"});
    },[]);
    


    // ----------------------------------------Event Listener-----------------------------------
    // ------------------------------------------------------------------------------------------


    const handleTitleClick=(e)=>{
            switch (e.target.innerText) {   
                case "Dashboard":  setSelectedBar({transform:"translateX(0)",width:"90px"});break;
                case "Dossier Médical" :  setSelectedBar({transform:"translateX(119px)",width:"121px"}); break;
                case "Message": setSelectedBar({transform:"translateX(269px)",width:"75px"}); break;
                default: 
                    break;
            }
    }

    const handleClickNotification = ()=>{
        setDispalyNotif(prev=>!prev);
    }


    return (
        <div className={dashboard}>
            <nav className={nav_bar}>
                <div className={title_navigation} onClick={handleTitleClick}>
                    <Link to='/dashboard' style={{color : (selectedBar.width ==='90px' && "black")}}>Dashboard</Link>
                    <Link to='/dashboard/DossierMedical' style={{color : (selectedBar.width ==='121px' && "black")}}>Dossier Médical</Link>
                    <Link style={{color : (selectedBar.width ==='75px' && "black")}}>Message</Link>
                    <Link>Compte</Link>
                    <div className={selected_bar} style={selectedBar} ></div>
                </div>
                <div className={icons_buttons}>
                        <div className={icon_container} onClick={handleClickNotification} ><img src={Notification} /></div>
                        <div className={icon_container}><img src={Settings} /></div>
                </div>
            </nav>
                { displayNotif &&  <NotifPopUp></NotifPopUp>}

            <div className={content_container}>         
                   <Route exact path="/dashboard"><DashBoardMenu/></Route>
                   <Route path="/dashboard/DossierMedical"><DossierMed/></Route>         
            </div>

          
        </div>
    )
}

export default Dashboard
