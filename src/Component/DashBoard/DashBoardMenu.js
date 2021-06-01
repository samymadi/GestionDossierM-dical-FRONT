import {useState} from "react";

import Styles from '../../Styles/Dashboard/DashboardMenu.module.css';


// -----------------------------Component Imports----------------------
import RappelEvent from './RappelEvent';
import Rappel from '../Modals/Rappel/Rappel';
import ModalContainer from '../Modals/ModalContainer'

function DashBoardMenu() {
    const {dash_container,left_container,right_container} = Styles;
    


  
    return (
        <div className={dash_container}>
                <div className={left_container}>
                    <RappelEvent onClick={()=>{alert("oke")}}></RappelEvent>
                </div>
                <div className={right_container}>
                </div>

        </div>
    )
}

export default DashBoardMenu
    