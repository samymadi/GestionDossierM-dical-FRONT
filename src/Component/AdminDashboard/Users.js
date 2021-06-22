import {useState} from 'react';
import Styles from '../../Styles/AdminDashboard/Users.module.css';

import Modal from '../Modals/ModalContainer';
import UserInfo from '../Modals/Admin/UserInfo';

function Users() {
    const {user_list,list_header,users} = Styles;

    const [modalOpen,setModalOpen] = useState(false);
    const contentContainerSize ={width:"45%"}
    const element = {setModalOpen,contentContainerSize}

    return (
        <div className={user_list}>
            <h2>Utilisateurs</h2>
                    <div className={list_header}>
                        <p>ID</p>
                        <p>Nom</p>
                        <p>Prenom</p>
                        <p>Type Compte</p>
                        <p>Nom Laboratoire</p>
                    </div>
                    <div className={users}>
                            <UserBulle onClick={setModalOpen}></UserBulle>
                            <UserBulle></UserBulle>
                            <UserBulle></UserBulle>
                            <UserBulle></UserBulle>
                            <UserBulle></UserBulle>
                            <UserBulle></UserBulle>
                            <UserBulle></UserBulle>
                            <UserBulle></UserBulle>
                            <UserBulle></UserBulle>
                            <UserBulle></UserBulle>
                            <UserBulle></UserBulle>
                             
                    </div>
              { modalOpen &&  <Modal options={{element}} ><UserInfo></UserInfo></Modal>}
                </div>
    )
}

export default Users





function UserBulle({children,...element}){
    const {bulle_container} = Styles;
    const {onClick} = element;
    
    return (
        <div onClick={onClick} className={bulle_container}>
                <p>dsjljdkls lodklsklsdklsdksldldkslkdlskdlsdkslkldklsdkls</p>
                <p>Madi</p>
                <p>Samy</p>
                <p>Medecin</p>
                <p>..</p>
               
        </div>
    )
}

