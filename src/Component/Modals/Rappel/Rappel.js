import {useState} from 'react';
import Styles from '../../../Styles/Modals/Rappel/Rappel.module.css';

import ModalContainer from '../ModalContainer';
import AddRappel from './AddRapple';

function Rappel({children,...element}) {
    const {container,rappel_title,content_container,content_rappel,date_rappel,button_container} =Styles;
    element["contentContainerSize"] = {width:"45%"}
    
    const {rappel} = element;
    const [openModification,setOpenModification] = useState(false);





    const handleModify = ()=>{
        setOpenModification(true);
    }

    return (
         <ModalContainer options={{element}}>
               { !openModification ?   <div className={container}>
                    <p className={rappel_title}>{rappel.title}</p>

                    <div className={content_container}>
                        <p className={content_rappel}>{rappel.description}</p>
                    </div>
                        <p className={date_rappel}>{rappel.dateFor}</p>

                        <div className={button_container}>
                            <button>Supprimer</button>
                            <button onClick={handleModify}>Modifier</button>
                        </div>
                </div>  :  <AddRappel back={setOpenModification}></AddRappel>}
         </ModalContainer>
    )
}

export default Rappel
