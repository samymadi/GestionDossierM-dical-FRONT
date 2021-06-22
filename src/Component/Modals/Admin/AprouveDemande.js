import {useEffect, useState} from 'react'
import Styles from '../../../Styles/Modals/Admin/AprouveDemande.module.css';


import Select from '../../SelectInputComponent/SelectInput';
function AprouveDemande() {
    const {container,select,info,control} = Styles;
    const spécialité = ["Addictologue","Allergologue‎","Anatomiste‎","Andrologue‎","Anesthésiste‎","Biologiste médical‎","Cancérologue‎","Dentiste‎","Dermatologue‎","Endocrinologue‎","Médecin généticien‎","Gynécologue","Hématologue‎","Hépato-gastro-entérologue‎","Homéopathe‎","Immunologiste‎","Infectiologue‎","Médecin légiste‎","Médecin de santé publique‎","Médecin généraliste‎","Néphrologue","Neurologue‎","Obstétricien‎","Ophtalmologue","Orthopédiste‎","Otorhinolaryngologiste","Parasitologiste‎","Pathologiste‎","Pédiatre‎","Pneumologue‎","Proctologue‎","Psychiatre‎","Radiologue‎","Rhumatologue‎","Sexologue‎","Médecin du sport‎","Toxicologue","Urologue‎","Vénérologue‎","Vétérinaire‎","Virologue‎"]


    const [typeCompte,setTypeCompte] = useState();
    const [spécialiste,setSpécialiste] = useState();
    const [displaySpe,setDisplaySep] = useState(false);

    useEffect(()=>{
        if(typeCompte === "Médecin")  setDisplaySep(true);
            else setDisplaySep(false);
    },[typeCompte])

    return (
        <div className={container}>
                <h2>Demande</h2>
                <div className={info}>
                    <p>Numéro demande : <span>554822445</span></p>
                    <p>Type Demande : <span>Patient</span></p>
                    <button>Télécharger les fichier</button>
                </div>

                <div className={select}>
                    <Select optionsList={["Patient","Médecin","Laboratoire"]} title="Type Compte" value={typeCompte} setValue={setTypeCompte} ></Select>
                    {displaySpe &&  <Select optionsList={spécialité} title="Specialité" value={spécialiste} setValue={setSpécialiste}  ></Select>}
                </div>

                <div className={control}>
                    <button>Approuver</button>
                    <button>Refuser</button>
                </div>
        </div>
    )
}

export default AprouveDemande
