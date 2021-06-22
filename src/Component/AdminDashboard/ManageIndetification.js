import {useState} from 'react'


import Styles from '../../Styles/AdminDashboard/ManageIdentification.module.css';

import Modal from '../Modals/ModalContainer';
import AprouveDemande  from '../Modals/Admin/AprouveDemande';


function ManageIndetification() {
    const {container,demande_list_container,list_header,demande_user} = Styles;
   

    const [modalOpen,setModalOpen]= useState(false);

    const contentContainerSize = {width:"50%"}
    const element = {setModalOpen,contentContainerSize}; 



    const handleOpenDemande = ()=>{
        setModalOpen(true);
    }

    return (
        <div className={container}>
            <h2>Demandes d'identifications</h2>
            <div className={demande_list_container}>
                <div className={list_header}>
                    <p>ID</p>
                    <p>Nom</p>
                    <p>Prenom</p>
                    <p>Type Demande</p>
                    <p>Date Demande</p>
                </div>
                <div className={demande_user}>
                <UserBulle onClick={handleOpenDemande}></UserBulle>
                <UserBulle></UserBulle>
                <UserBulle></UserBulle>
                <UserBulle></UserBulle>
                <UserBulle></UserBulle>
                <UserBulle></UserBulle>
                <UserBulle></UserBulle>
                <UserBulle></UserBulle>
                <UserBulle></UserBulle>
                </div>
            </div>
            {modalOpen && <Modal options={{element}}><AprouveDemande></AprouveDemande></Modal>}
        </div>
    )
}

export default ManageIndetification



function UserBulle({onClick}){
    const  {container_bulle} = Styles;

    return (
        <div onClick={onClick} className={container_bulle}>
                <p>ldskdsiuiucjckjsqkjsqkjqsksdjldkslkd</p>
                <p>Madi</p>
                <p>Samy</p>
                <p>Médecin</p>
                <p>2021-10-16</p>
        </div>
    )
}
