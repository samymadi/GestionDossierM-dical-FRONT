import {useEffect} from 'react';
import Styles from '../../../Styles/Modals/ManageDoc/DisplayDoc.module.css';



import Download from '../../../Assests/Icons/Download.png';
import Edit from '../../../Assests/Icons/Edit.png';
import Pdf from '../../../Assests/Icons/Pdf.png';
import DropDown from '../../../Assests/Icons/DropDown.png';

function DisplayDoc({setOpenModif}) {
   
    const {container,display_content,avis_medecin,file_title,file_content,source_file,file_description,container_style,date_time,labo,sub_title,desc,description_content,button_container,button_bulle,source_img,separateur,avis_list} = Styles;


    useEffect(()=>{
          
           
    
     },[])

    const handleModify = ()=>{
        setOpenModif(true);
    }

    return (
        <div className={container}>
            <div className={display_content}>
                <p className={file_title}>Echographie</p>
                    <div className={file_content}>
                        <div className={`${source_file} ${container_style}`}>
                            <div className={button_container}>
                                <div className={button_bulle}>
                                    <img src={Download} />
                                </div>
                                <div className={button_bulle}>
                                    <img src={Edit} onClick={handleModify} />
                                </div>
                            </div>
                            <img className={source_img} src={Pdf} />
                        </div>
                        <div className={`${file_description} ${container_style}`}>
                            <p className={sub_title}>Echographie de Grosse</p>
                            <p className={desc}>Description</p>
                            <p className={description_content}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui libero vitae facilis sit molestias ut reprehenderit consequatur, debitis, quibusdam alias aspernatur nostrum similique nihil iste. Explicabo alias eius ab ea.</p>
                        </div>
                    </div>
                <p className={date_time}>2021-07-18 &nbsp; / &nbsp; 13:05  <span className={labo}> &nbsp; &nbsp; Labo BioHealth</span></p>    
            </div>
            <div className={separateur}></div>
            <div className={avis_medecin}>
                <p className={file_title} >Avis Médecin</p>
                <div className={avis_list}>
                    <AvisInput></AvisInput>
                    <AvisMedecin></AvisMedecin>
                    <AvisMedecin></AvisMedecin>
                    <AvisMedecin></AvisMedecin>
                    <p>Voir Plus</p>
                </div>
            </div>
        </div>
    )
}

export default DisplayDoc




function AvisInput(){

    const {input_container,text_area} = Styles;

    return (
        <div className={input_container}>
                <textarea className={text_area} placeholder="Ecrire un avis"/>
                <button>Publier</button>
        </div>
    )
}




function  AvisMedecin(){
    const {avis_container,avis_details,avis_text,doctor_name,date_time_avis} = Styles;

    return (
        <div className={avis_container}>
                <div className={avis_details}>
                    <p className={doctor_name}>Dr.Madi</p>
                    <p className={date_time_avis}>2021-07-15  13:50</p>
                </div>
                <p className={avis_text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos exercitationem magnam, incidunt consectetur ut deleniti facere in, iste ratione mollitia vel illo? Et recusandae aperiam voluptas quas dolor, quis eaque. </p>
                <img src={DropDown} />
        </div>
    )
}
