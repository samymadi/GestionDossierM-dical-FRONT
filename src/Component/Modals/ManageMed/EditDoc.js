import { useEffect } from 'react';

import Styles from '../../../Styles/Modals/ManageDoc/EditDoc.module.css';


// -------------------------------Component Imports--------------------------------
import SelectInput from '../../SelectInputComponent/SelectInput';

import Pdf from '../../../Assests/Icons/Pdf.png'
import Img from '../../../Assests/Icons/Img.png'
import Zip from '../../../Assests/Icons/Zip.png'
import Delete from '../../../Assests/Icons/Delete.png';


function EditDoc({setOpenModif}) {

    const {container,title,sub_title,documents,details,inputs_1,buttons_container,input_file,title_input,text_area} = Styles;
    
    const handleCancel = ()=>{
        setOpenModif(false);
    }


    useEffect(()=>{
        return ()=>{setOpenModif(false)}
    },[])
    
    return (
        <div className={container}>
                <p className={title}>Nouveau Document</p>
                <p className={sub_title}>Documents :</p>
                <div className={documents}>
                     <FileContainer></FileContainer>   
                     <FileContainer></FileContainer>   
                     <FileContainer></FileContainer>   
                    
                      
                      
                    
                </div>
                <label className={input_file} htmlFor="addfile">Ajouter un fichier</label>
                <input  id='addfile' type="file" />
                    <p className={sub_title}>Détails :</p>
                <div className={details}>
                    <div className={inputs_1}>
                        <SelectInput optionsList={["sas","ss"]} title="Type d'analyse" ></SelectInput>
                        <input className={title_input} type="text" placeholder='Titre' />
                    </div>
                    <textarea className={text_area} placeholder='Description' />
                </div>

                <div className={buttons_container}>
                    <button onClick={handleCancel}>Annuler</button>
                    <button>Confirmer</button>
                </div>
        </div>
    )
}

export default EditDoc



function FileContainer (){
    const {file_container,file_name,file_img,separateur} = Styles
    return (
        <div className={file_container}>
                    <img  src={Delete} />
                    <img className={file_img} src={Pdf} />
                    <p className={file_name}>EchoGraphie.pdfskjskj</p>
                    
        </div>
    )
}
