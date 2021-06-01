import {useState} from 'react';

import Styles from '../../Styles/Dashboard/DossierMed.module.css';

import ManageDocument from './ManageDocument';


// ------------------------------------Icons Imports---------------------------------

import AddDocument from '../../Assests/Icons/AddDocument.png';
import CreateFolder from '../../Assests/Icons/CreateFolder.png';
import ModalContainer from '../Modals/ModalContainer';
import EditDoc from '../Modals/ManageMed/EditDoc';

function DossierMed() {
    const {container,left_side,right_side,button_container,input_container,buttons,container_extend,animate} = Styles;
    
    
    const [animation,setAnimation] = useState("");
    const [modalDisplay,setModalDisplay] = useState(false);
    const [openNew,setOpenNew] = useState(false)
    
    const element = {
        setModalOpen: setOpenNew,
        contentContainerSize:{
            width:"60%",
            margin:"30px auto"
        }
    }


    const handleExtend = ()=>{
        setAnimation(prev =>prev == "" ? animate : "");
    }


    const handleAddDoc = ()=>{  
        setOpenNew(true);
    }
   
    return (
        <div className={container}>
            <div className={left_side}>
                <div className={`${button_container}`} onClick={handleAddDoc}>
                    <img src={AddDocument}/>
                    <p>Ajouter un document</p>
                </div >
                    <div className={`${button_container} ${container_extend} ${animation}`}  >
                        <div className={`${button_container}`} onClick={handleExtend}  >
                            <img src={CreateFolder}/>
                            <p>Créer un dossier </p>

                        </div>
                        
                        <div className={input_container} >
                            <input type="text" placeholder="Nom du dossier" />
                                    <button>Creer</button>
                        </div>
                    </div>
            </div>

            <div className={right_side}>
                <ManageDocument modalDisplay={modalDisplay} setModalDisplay={setModalDisplay} ></ManageDocument>
                { openNew && <ModalContainer options={{element}} > <EditDoc></EditDoc> </ModalContainer>}
            </div>

        </div>
    )
}

export default DossierMed
