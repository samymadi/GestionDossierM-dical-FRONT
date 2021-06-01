import {useState} from 'react'


import Styles from '../../Styles/Dashboard/RappelEvent.module.css'


// --------------------------------Icons Imports---------------------------------------


import AddRappel from '../../Assests/Icons/AddRappel.png';
import Delete from '../../Assests/Icons/Delete.png';
import Rappel from '../Modals/Rappel/Rappel'
import ModalContainer from '../Modals/ModalContainer';



function RappelEvent() {
    
    const {container,new_rappel_button,rappel_list} =Styles;

    const [modal,setModal] = useState(false);
    const [modalAdd,setModalAdd] =useState(true);
   



    const handleAddEvent = ()=>{
      
    }

    return (
        <div className={container}>
                <div className={new_rappel_button}  onClick={handleAddEvent} >
                    <p>Nouveau Rapple...</p>
                    <img src={AddRappel} />
                </div>
            {/* {modalAdd && <ModalContainer options={{element:{setModalOpen:setModalAdd}}}><AddRappel></AddRappel></ModalContainer>}     */}
            { modal  && <Rappel setModalOpen={setModal}></Rappel>}    
            <div className={rappel_list}>
                <RappelBox openModal={()=>setModal(true)} ></RappelBox>
                <RappelBox openModal={()=>setModal(true)} ></RappelBox>
                <RappelBox openModal={()=>setModal(true)} ></RappelBox>
                <RappelBox openModal={()=>setModal(true)} ></RappelBox>
            </div>
               

        </div>
    )
}

export default RappelEvent




function RappelBox({children,...element}){

    const {rapple_box_container,rappel_title,rappel_content,rappel_date,icon_new_rappel} = Styles;
    const {openModal} = element;


    const handleClick = ()=>{
            openModal();
    }
    return(
        <div className={rapple_box_container} onClick={handleClick}>
            <div>
                 <p className={rappel_title}>  ratione dolor.</p>
                  <div className={icon_new_rappel}></div> 
            </div>
            <p className={rappel_content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis minima alias ipsa, ad hic doloremque molestias, cumque nihil eum, maxime repudiandae ut reiciendis? Quam, sapiente illo! Ipsam minus ab laboriosam.</p>
            <p className={rappel_date}>Pour 0000-00-00  00:00</p>
            <img src={Delete} />
            
        </div>
    )
}
