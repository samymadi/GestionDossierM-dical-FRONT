import {useState} from 'react'
import {useHistory} from 'react-router-dom';

import Styles from '../Styles/AdminDashboard/AdminDashboard.module.css';
import axios from 'axios';
import Cookies from 'js-cookie';

import Delete from "../Assests/Icons/Delete.png";


/* ----------------------------------Component Imports -------------------------------------- */
import Users from '../Component/AdminDashboard/Users';
import ManageIdentification from '../Component/AdminDashboard/ManageIndetification';
import {HttpRequest} from '../Models/User';



function AdminDashBoard() {

    const {container,left_side,right_side,user_list,list_header,users,selected_bar,nav_container,select_user,select_demande} = Styles;
    const [selectedTitle,setSelectedTitle] = useState(select_user);
    const [title,setTitle] = useState(true);

    const history = useHistory();
    
    
    
    const handleClickTitle = (e)=>{
        if(e.target.innerText === "Utilisateurs")
           { setSelectedTitle(select_user);
             setTitle(true);   
            }
                else 
                    if(e.target.innerText === "Demandes d'identifications") {
                        setSelectedTitle(select_demande);
                        setTitle(false);
                    }
    }



    const handleLogOut = async(e)=>{
        e.stopPropagation();
        e.preventDefault();
        const request = new HttpRequest("session",Cookies.getJSON("SessionAuth"));
        await  axios.post("http://localhost:8000/authentification/Disconnect",request)
                .then(result=>{
                    if(result.status === 200)
                        {
                        Cookies.remove("SessionAuth");
                        history.go("/Authentication/true");  
                        Cookies.set("Login",false);
                            }
                })
                .catch(err=>console.log(err));
    }
    
    return (
        <div className={container}>
            <div className={left_side}>
               <div className={nav_container} onClick={handleClickTitle}>
                    <p>Utilisateurs</p>
                    <p>Demandes d'identifications</p>
                    <div className={`${selected_bar} ${selectedTitle}`}></div>
                    <p onClick={handleLogOut}>Déconnexion</p>
               </div> 
            </div>

            <div className={right_side}>
                 { title  ?  <Users></Users> : <ManageIdentification></ManageIdentification>}
            </div>
        </div>
    )
}

export default AdminDashBoard







