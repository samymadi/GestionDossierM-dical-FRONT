import { forwardRef, useEffect,useState } from 'react';

import Styles from '../../../Styles/Modals/ManageDoc/EditDoc.module.css';


// -------------------------------Component Imports--------------------------------
import SelectInput from '../../SelectInputComponent/SelectInput';

import Pdf from '../../../Assests/Icons/Pdf.png'
import Img from '../../../Assests/Icons/Img.png'
import Zip from '../../../Assests/Icons/Zip.png'
import Delete from '../../../Assests/Icons/Delete.png';

import { HttpRequest } from '../../../Models/User';
import Cookies from 'js-cookie';
import axios from 'axios';


function EditDoc({setOpenModif,patientId,folderId,doc}) {

    const {container,title,sub_title,documents,details,inputs_1,buttons_container,input_file,title_input,text_area,error_message} = Styles;
    const ExamenMédical = ["Amniocentèse","Angiographie pulmonaire","Antibiogramme","Artériographie","Arthroscopie","Audiométrie","Bilan sanguin","Bilan urodynamique","Biopsie","Biopsie du trophoblaste","Capillaroscopie","Caryotype","Coelioscopie","Coloscopie","Colposcopie","Coproculture","Coronarographie (angiographie coronaire)","Cystographie","Cystoscopie","Doppler","ECBU","ECG","Échocardiographie","Echographie abdomino-pelvienne","Electroencéphalographie (EEG)","Électromyogramme","Électrorétinogramme","Endoscopie digestive","Explorations fonctionnelles respiratoires (EFR)","Fibroscan","Fibroscopie","Frottis vaginal","Hémogramme","Hysterosalpingographie","Hysteroscopie","Holter","Impédancemétrie","Ionogramme","IRM","Mammographie","Myélogramme","Ostéodensitométrie","Phmétrie","Ponction lombaire","Ponction pleurale","Ponction pleurale","Radiographie","Scanner","Scintigraphie","Spermogramme","Spirométrie","Tomodensitométrie","Tomographie","Urétrocystographie","Urétéroscopie","Urétroscopie","Urographie","Uroscanner"]
    const [fileArray,setFileArray] = useState([]);
    
    
    const [examenMed,setExamenMed] = useState("");
    const [titre,setTitre] = useState("");
    const [description,setDescription] = useState("");
    const [error,setError] = useState("");


    async function createDocumentApi(){
        const formData = new FormData();
        formData.append("User_Id",patientId);
        formData.append("Visitor_Id",Cookies.getJSON('SessionAuth').Id_User);
        formData.append("folderId",folderId);
        formData.append("documentType",examenMed);
        formData.append("title",titre);
        formData.append("description",description);
        for (const file of fileArray) {
                formData.append("file",file);
        }   

     await axios.post("http://localhost:8000/MedDoc/createDocument",formData,{headers:{'Content-Type':'multipart/form-data'}})
        .then(result=>{
            console.log(result);
            setOpenModif(false);
        })
        .catch(err=>console.log(err))
    }


    useEffect(()=>{
        return ()=>{setOpenModif(false)}
    },[])

    const handleCancel = ()=>{
        setOpenModif(false);
    }

    const handleChangeTitre = (e)=>{
            setTitre(e.target.value);
            setError("");
    }

    const handleChangeDesc = (e)=>{
            setDescription(e.target.value);
            setError("");
    }   



    const handleChangeFile  = (e)=>{
        
        if(e.target.files.length === 0) return;
        setFileArray(prev=>{
            
            return [e.target.files[0],...prev];
        })
    }

    const removeFile = index=>{
        console.log(fileArray);
        setFileArray(prev=>(prev).filter((file,key)=>index != key))
    }

    const handleAddDoc = async ()=>{
        if(fileArray.length === 0) {setError("Pas de fichier !.. "); return;}
        if(!examenMed) {setError("Type d'examen obligatoire"); return;}
            if(!titre.trim())
                setError("Veuillez saisir un titre");
                    else    
                        if(!description.trim()) setError("La description est obligatoire");
                     else
                     {
                        createDocumentApi();
                     }   
    }
    
    return (
        <div className={container}>
                <p className={title}>Nouveau Document</p>
                <p className={sub_title}>Documents :</p>
                <div className={documents}>

                    { fileArray.length === 0 ? <p>Aucun Fichier</p>  :   fileArray.map((file,key)=>(
                        <FileContainer key={key}  removeFile={removeFile} fileIndex ={key} file={file} ></FileContainer>
                    ))}  
                    
                </div>
                <label className={input_file} htmlFor="addfile">Ajouter un fichier</label>
                <input  id='addfile' type="file" onChange={handleChangeFile} accept='image/jpeg , image/png ,image/jpg , .pdf , .zip , .rar' />
                    <p className={sub_title}>Détails :</p>
                <div className={details}>
                    <div className={inputs_1}>
                        <SelectInput optionsList={ExamenMédical} title="Type d'examen" value={examenMed} setValue={setExamenMed} ></SelectInput>
                        <input className={title_input} type="text" value={titre} maxLength='30' onChange={handleChangeTitre} placeholder='Titre' />
                        <p className={error_message}>{error}</p>
                    </div>
                    <textarea className={text_area} value={description} maxLength="900" onChange={handleChangeDesc} placeholder='Description' />
                </div>

                <div className={buttons_container}>
                    <button onClick={handleCancel}>Annuler</button>
                    <button onClick={handleAddDoc}>Confirmer</button>
                </div>
        </div>
    )
}

export default EditDoc



function FileContainer ({file,fileIndex,removeFile}){
    const {file_container,file_name,file_img,separateur} = Styles

    const {name,type} = file;
    const [fileIcon,setFileIcon] = useState();
    console.log(type);
    
    useEffect(()=>{
       if(type === "image/jpeg" || type === "image/png" || type === "image/jpg")
        setFileIcon(Img);
            else if (type === 'application/pdf') setFileIcon(Pdf);
                else setFileIcon(Zip);
    })
    return (
        <div className={file_container}>
                    <img  src={Delete} onClick={()=>removeFile(fileIndex)} />
                    <img className={file_img} src={fileIcon} />
                    <p className={file_name}>{name}</p>
        </div>
    )
}
