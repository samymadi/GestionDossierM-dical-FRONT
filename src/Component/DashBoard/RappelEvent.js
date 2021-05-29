import Styles from '../../Styles/Dashboard/RappelEvent.module.css'


// --------------------------------Icons Imports---------------------------------------

import AddRappel from '../../Assests/Icons/AddRappel.png';
import Delete from '../../Assests/Icons/Delete.png';



function RappelEvent() {
    
    const {container,new_rappel_button,rappel_list} =Styles;

    return (
        <div className={container}>
                <div className={new_rappel_button}>
                    <p>Nouveau Rapple...</p>
                    <img src={AddRappel} />
                </div>
            <div className={rappel_list}>
                <RappelBox></RappelBox>
                <RappelBox></RappelBox>
                <RappelBox></RappelBox>
                <RappelBox></RappelBox>
            </div>
               

        </div>
    )
}

export default RappelEvent




function RappelBox(){

    const {rapple_box_container,rappel_title,rappel_content,rappel_date,icon_new_rappel} = Styles;

    return(
        <div className={rapple_box_container}>
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
