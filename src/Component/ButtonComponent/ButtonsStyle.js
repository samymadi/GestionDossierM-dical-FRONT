import Styles from './ButtonStyle.module.css';

function ButtonsStyle({children,...element}) {

    const {eventclick,image,type,className} = element;
   
    const handleOnClick = ()=>{
        eventclick();
    }

    return (
        <div onClick={handleOnClick} className={`${Styles.container}  ${type === "primary" ? Styles.container_image : Styles.container_style2} ${className}`}>
          <button >{children}</button>
          <img src={image} style={{display: (type !== "primary" || image === undefined ? "none" : "block")}}  />
        </div>

        
    )
}

export default ButtonsStyle
