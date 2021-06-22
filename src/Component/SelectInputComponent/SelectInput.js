import {useState} from 'react';

import Styles from './SelectInput.module.css'


import DropDown from '../../Assests/Icons/DropDown.png';

function SelectInput({...element}) {
    const {container,button_container,options}= Styles;

    const {optionsList,title,value,setValue} = element;


    const [open,setOpen] = useState(false);



    const handleClick = ()=>{
        setOpen(prev=>!prev);
    }


    const handleChoose = (e)=>{
        setValue(e.target.innerText);
        setOpen(false);
    }
    return (
        <div className={container}>
                <div className={button_container} onClick={handleClick}>
                    <p>{ value || title}</p>
                    <img src={DropDown} />
                </div>

               { open && <div className={options} onClick={handleChoose}>
                  {optionsList.map((item,key)=>{
                      return <p key={key}>{item}</p>
                  })} 
                    
                    
                </div>}
        </div>
    )
}

export default SelectInput
