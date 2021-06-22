import {useEffect,useState,useContext} from 'react';
import Styles from '../../../Styles/Modals/ManageDoc/DisplayDoc.module.css';

import Privilges,{Patient}  from '../../../Context/AuthContext';
import axios from 'axios';



import Download from '../../../Assests/Icons/Download.png';
import Edit from '../../../Assests/Icons/Edit.png';
import Pdf from '../../../Assests/Icons/Pdf.png';
import DropDown from '../../../Assests/Icons/DropDown.png';
import { HttpRequest } from '../../../Models/User';
import Cookies from 'js-cookie';

function DisplayDoc({setOpenModif,doc}) {
   
    const {container,display_content,avis_medecin,file_title,file_content,source_file,file_description,container_style,date_time,labo,sub_title,desc,description_content,button_container,button_bulle,source_img,separateur,avis_list} = Styles;
    const privileges = useContext(Privilges);
    const patient = useContext(Patient);

    const [avisArray,setAvisArray] = useState([]);
    console.log("avis",avisArray);
    

    useEffect(async ()=>{
        const request = new HttpRequest({document_id:doc.documentId},Cookies.getJSON("SessionAuth"));
        await axios.post('http://localhost:8000/MedDoc/getAvis',request)
        .then(result=>{
            if(result.status === 200){
                    setAvisArray(result.data.data);
            }
                else{
                    console.log(result);

                }
        })
        .catch()
    
     },[])

    const handleModify = ()=>{
        setOpenModif(true);
    }

    return (
        <div className={container}>
            <div className={display_content}>
                <p className={file_title}>{doc.documentType}</p>
                    <div className={file_content}>
                        <div className={`${source_file} ${container_style}`}>
                            <div className={button_container}>
                                <div className={button_bulle}>
                                    <img src={Download} />
                                    
                                </div>

                               { (privileges !=1 && patient.droit != 1 ) && <div className={button_bulle}>
                                    <img src={Edit} onClick={handleModify} />
                                </div>}
                            </div>
                            <img className={source_img} src={Pdf} />
                        </div>
                        <div className={`${file_description} ${container_style}`}>
                            <p className={sub_title}>{doc.titre}</p>
                            <p className={desc}>Description</p>
                            <p className={description_content}>{doc.description}</p>
                        </div>
                    </div>
                <p className={date_time}>{new Date(doc.creationDate).toGMTString().substring(0,22)}<span className={labo}> &nbsp; &nbsp; {doc.labo_medecinName}</span></p>    
            </div>
            <div className={separateur}></div>
            <div className={avis_medecin}>
                <p className={file_title} >Avis Médecin</p>
                <div className={avis_list}>
                   { (privileges === 2 && patient.droit !=1) && <AvisInput doc={doc}></AvisInput>}
                    { avisArray &&  avisArray.map((avis,key)=>(
                        <AvisMedecin key={key} avis={avis}></AvisMedecin>
                    ))}
                    <p>Voir Plus</p>
                </div>
            </div>
        </div>
    )
}

export default DisplayDoc




function AvisInput({doc}){

    const {input_container,text_area} = Styles;
    const [content,setContent] = useState("");


   async function postAvisAPi(){
        const request = new HttpRequest({
            user_id:Cookies.getJSON("SessionAuth").Id_User,
            document_id:doc.documentId,
            contenu:content
    },Cookies.getJSON("SessionAuth"));
        await axios.post('http://localhost:8000/MedDoc/postAvis',request)
        .then(result=>{
            if(result.status == 200){
                alert("Avis ajouté");
            }
            else{   
                console.log(result);
            }
        })
        .catch(err=>console.log(err))
    }

    const handleChangeContent=(e)=>{
        setContent(e.target.value);
    }

    const handleAddAvis=()=>{
        if(!content) return;
               postAvisAPi();
    }

    return (
        <div className={input_container}>
                <textarea className={text_area} placeholder="Ecrire un avis" maxLength="1000" value={content} onChange={handleChangeContent}/>
                <button onClick={handleAddAvis}>Publier</button>
        </div>
    )
}




function  AvisMedecin({avis}){
    const {avis_container,avis_details,avis_text,doctor_name,date_time_avis} = Styles;
    const {avisId,dateAvis,contenu,nom} = avis;


    return (
        <div className={avis_container}>
                <div className={avis_details}>
                    <p className={doctor_name}>Dr.{nom}</p>
                    <p className={date_time_avis}>{dateAvis}</p>
                </div>
                <p className={avis_text}>{contenu}</p>
                <img src={DropDown} />
        </div>
    )
}
