import {useState,useEffect} from 'react'
import { useHistory } from 'react-router';


import Styles from '../../Styles/Dashboard/RappelEvent.module.css'


// --------------------------------Icons Imports---------------------------------------


import AddRappel from '../../Assests/Icons/AddRappel.png';
import Delete from '../../Assests/Icons/Delete.png';
import Rappel from '../Modals/Rappel/Rappel'
import ModalContainer from '../Modals/ModalContainer';
import AddRapple  from '../Modals/Rappel/AddRapple';
import { HttpRequest } from '../../Models/User';
import axios from 'axios';
import Cookies from 'js-cookie'



function RappelEvent() {
    
    const {container,new_rappel_button,rappel_list} =Styles;

    const history = useHistory();

    const [modal,setModal] = useState(false);
    const [modalAdd,setModalAdd] =useState(false);
    const [rappelArray,setRappelArray] = useState([]);
    const [currentRappel,setCurrentRappel] = useState();



    useEffect(async() => {
       const request = new HttpRequest("data",Cookies.getJSON("SessionAuth"))
        await axios.post('http://localhost:8000/dashboard/getRappel',request)
        .then(result=>{
            if(result.status == 200){
                setRappelArray(result.data.data);
            }
            else console.log(result);
        })
        .catch(err=>console.log(err))
        
    }, [])
   



    const handleAddEvent = ()=>{
        setModalAdd(true);
    }

    return (
        <div className={container}>
                <div className={new_rappel_button}  onClick={handleAddEvent} >
                    <p>Nouveau Rapple...</p>
                    <img src={AddRappel} />
                </div>
            {modalAdd && <ModalContainer options={{element:{setModalOpen:setModalAdd,contentContainerSize:{width:"45%"}}}}><AddRapple back={setModalAdd} rapple={currentRappel} ></AddRapple></ModalContainer>}    
            { modal  && <Rappel setModalOpen={setModal} rappel={currentRappel}></Rappel>}    
            <div className={rappel_list}>
                {rappelArray && rappelArray.map((rappel,key)=>(
                    <RappelBox openModal={()=>setModal(true)} rappel={rappel} key={key} setCurrentRappel={setCurrentRappel}  ></RappelBox>
                ))}
               
            </div>
               

        </div>
    )
}

export default RappelEvent




function RappelBox({children,...element}){

    const {rapple_box_container,rappel_title,rappel_content,rappel_date,icon_new_rappel} = Styles;
    const {openModal,rappel,setCurrentRappel} = element;
    const {description,title,dateFor} = rappel;


    const handleClick = ()=>{
            setCurrentRappel(rappel);
            openModal();
    }
    return(
        <div className={rapple_box_container} onClick={handleClick}>
            <div>
                 <p className={rappel_title}>{title}</p>
                
            </div>
            <p className={rappel_content}>{description}</p>
            <p className={rappel_date}>Pour {dateFor}</p>
            <img src={Delete} />
            
        </div>
    )
}
