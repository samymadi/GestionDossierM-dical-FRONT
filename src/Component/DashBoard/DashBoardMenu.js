import {useState} from "react";

import Styles from '../../Styles/Dashboard/DashboardMenu.module.css';


// -----------------------------Component Imports----------------------
import RappelEvent from './RappelEvent';
import Rappel from '../Modals/Rappel/Rappel';
import ModalContainer from '../Modals/ModalContainer'
import AlertMessage from "../AlertMessage/AlertMessage";

function DashBoardMenu() {
    const {dash_container,left_container,right_container,container_global_info} = Styles;
    


  
    return (
        <div className={dash_container}>
            
                <div className={left_container}>
                    <RappelEvent onClick={()=>{alert("oke")}}></RappelEvent>
                    <div className={container_global_info}>

                        <div>
                            <p>Notification :</p>
                            <p>Message :</p>
                            <p>Rappel :</p>
                        </div>
                        <div>
                            <p>4 Nouvelles </p>
                            <p>3 Nouveaux </p>
                            <p>0 Rappels</p>
                        </div>
                        
                    </div>
                </div>
                <div className={right_container}>
                    <Actualite></Actualite>
                </div>

        </div>
    )
}

export default DashBoardMenu
    

  const {bulle_container,actualite_container,list_container,bulle_content,bulle_date,author} = Styles


function Actualite(){

    return(
        <div className={actualite_container}>
            <h2>File d'actulaité</h2>
            <h4>Dossier médicale</h4>
            <div className={list_container}>
             <InformationBulle></InformationBulle>
             <InformationBulle></InformationBulle>
             <InformationBulle></InformationBulle>
             <InformationBulle></InformationBulle>
             <InformationBulle></InformationBulle>
            </div>
        </div>
    )
}  

function InformationBulle(){


    return (
        <div className={bulle_container}>
                <p className={bulle_content}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam quo veritatis voluptatem eos numquam quis rerum praesentium recusandae sapiente maiores, aspernatur architecto placeat, fugit iusto distinctio nihil delectus dolore sunt!</p>
                <p className={bulle_date}> 2021-10-12 15:05 &nbsp; <span className={author}>Labo bioHealth</span></p>
        </div>
    )
}