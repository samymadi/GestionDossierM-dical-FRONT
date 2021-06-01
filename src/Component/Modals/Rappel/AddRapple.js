import Styles from '../../../Styles/Modals/Rappel/AddRapple.module.css';

function AddRapple({back}) {
    const {container,input_details_container,text_message,button_container,title} = Styles;





    const handleCancel =()=>{
        back();
    }


    const handleConfirm =()=>{
        
    }
    
    return (
        <div className={container}>
            <p className={title}>Rappels</p>
            <div className={input_details_container}>
                <input type="text" placeholder="Titre" />
                <input type="date" />
                <input type="time" />
            </div>

            <textarea cols="30" rows="10"/>
            <p className={text_message}>Veuillez saisir la date du rappel  une notification vous sera envoyé  pour vous prévenir 
            de l'approche de l'évènement </p>

            <div className={button_container}>
                <button onClick={handleCancel}>Annuler</button>
                <button onClick={handleConfirm}>Confirmer</button>
            </div>


        </div>
    )
}

export default AddRapple
