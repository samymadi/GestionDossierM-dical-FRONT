import {useState,useEffect} from 'react';

import Styles from '../../Styles/Dashboard/ManageDocument.module.css';






// --------------------------------------Components Imports-----------------------------------

import ModalContainer from '../Modals/ModalContainer';
import DisplayDoc from '../Modals/ManageMed/DisplayDoc';
import EditDoc from '../Modals/ManageMed/EditDoc';

// --------------------------------------Icons Imports----------------------------------------


import FolderIcon from '../../Assests/Svg/Folder.svg';
import Pdf from '../../Assests/Icons/Pdf.png';
import Img from '../../Assests/Icons/Img.png';
import Zip from '../../Assests/Icons/Zip.png';
import Download from '../../Assests/Icons/Download.png';
import Edit from '../../Assests/Icons/Edit.png';
import Login_img2 from '../../Assests/Login-img2.jpg';
import Back from '../../Assests/Icons/Back.png';
import Sort from '../../Assests/Icons/sort.png';

function ManageDocument({...props}) {

    const {container,header,body_container,back_container,sort_container,options_sort_container,option} = Styles;
    
    const [openModif,setOpenModif] = useState(false);
    
    const {modalDisplay ,setModalDisplay}   = props;
    
    const element = {
        setModalOpen: setModalDisplay,
        contentContainerSize:{
            width:"65%",
            margin:"10px auto"
        }
    }
    


    useEffect(() => {
       
    });



    const [displaySort,setDisplaySort]=useState(false);




    function handleSortClick(){
            setDisplaySort(prev=>!prev);
    }
    
    
    return (
        <div className={container}>

                {modalDisplay && <ModalContainer  options={{element}}>
                                   { openModif ? <EditDoc setOpenModif={setOpenModif}></EditDoc> : <DisplayDoc setOpenModif={setOpenModif}></DisplayDoc>}
                                </ModalContainer>}  
            
                <div className={header}>
                   <div className={back_container}>
                        <img src={Back}/>
                        <p>Retour</p>
                    </div> 


                    <div className={sort_container}>
                        <img src={Sort} onClick={handleSortClick} title="Trier" />
                       { displaySort && <div className={options_sort_container}>
                          
                            <p className={option}>Specialité</p>
                            <p className={option}>Création</p>
                            <p className={option}>Type de fichier </p>
                            <p className={option}></p>
                            <p className={option}></p>
                        </div>}
                    </div>
                </div>

                <div className={body_container}>
                    <Folder onClick={()=>{setModalDisplay(true)}}></Folder>
                    <Folder></Folder>
                    <File></File>
                    <File></File>
                    <Folder></Folder>
                    <Folder></Folder>
                    <File></File>
                    <File></File>
                </div>
        </div>
    )
}

export default ManageDocument





function Folder({onClick}){

    const {folder_container,folder_content,folder_footer} = Styles

    return (
        <div onClick={()=>onClick()} className={folder_container}>

                <div className={folder_content}>
                 <img src={FolderIcon} />
                </div>
                <div className={folder_footer}>
                    <p>Dossier 1</p>
                </div>
        </div>
    )
}


function File(){

    const {file_container,file_content,file_footer} = Styles
    return(
        <div className={file_container}>
                <div className={file_content}>
                   <img src={Login_img2} alt="" />
                   <img src={Pdf}/>
                </div>

                <div className={file_footer}>
                        <p>Document 2</p>
                        <img src={Download} />
                        <img src={Edit}  />
                </div>
        </div>
    )
}