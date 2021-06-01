import {useState} from 'react';
import Styles from '../../../Styles/Modals/Rappel/Rappel.module.css';

import ModalContainer from '../ModalContainer';
import AddRappel from './AddRapple';

function Rappel({children,...element}) {
    const {container,rappel_title,content_container,content_rappel,date_rappel,button_container} =Styles;
    element["contentContainerSize"] = {width:"45%"}
    

    const [openModification,setOpenModification] = useState(false);





    const handleModify = ()=>{
        setOpenModification(true);
    }

    return (
         <ModalContainer options={{element}}>
               { !openModification ?   <div className={container}>
                    <p className={rappel_title}>Rappel Vaccination</p>

                    <div className={content_container}>
                        <p className={content_rappel}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse non illo sint sapiente perspiciatis, maxime obcaecati, quod ratione molestiae enim dolorum nemo? Iste laborum magnam eos voluptatem eveniet eius dolores?
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo, error! Enim eum laboriosam ullam explicabo sapiente voluptatibus est nam saepe voluptates magni cupiditate amet, magnam nostrum ipsam voluptas officia ipsum.
                        </p>
                    </div>
                        <p className={date_rappel}>2021-12-07 /  15:30</p>

                        <div className={button_container}>
                            <button>Supprimer</button>
                            <button onClick={handleModify}>Modifier</button>
                        </div>
                </div>  :  <AddRappel back={setOpenModification}></AddRappel>}
         </ModalContainer>
    )
}

export default Rappel
