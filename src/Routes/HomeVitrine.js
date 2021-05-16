import {useState,useEffect,useRef} from 'react';
import  Styles from '../Styles/HomeVitrine/HomeVitrine.module.css'
import {Link,useHistory} from 'react-router-dom'
import {animationObserverOnScroll} from '../Utils/AnimationsScroll'
import VitrineContent from '../Component/HomeVitrineComponents/VitrineContent';

import FacebookIcon from '../Assests/Icons/FacebookIcon.png'
import InstagramIcon from '../Assests/Icons/InstagramIcon.png'
import TwitterIcon  from '../Assests/Icons/TwitterIcon.png'



function HomeVitrine() {


    // ------------------Hooks react-router-dom-----------------------------------

     const history = useHistory();
    // ----------------------------------------------------------------------------

    const [titleStyle,setTitleStyle] = useState(1);   //etat pour style de titres du navbar 
    const navBar = useRef();
    const background = useRef();



    // Functions handleOnClick------------------------------------------------------------------------------

    const handleClickHome =()=>{
        setTitleStyle(1);           // 
    }
    const handleClickDetails =()=>{
        setTitleStyle(2);
        
    }
    const handleClickContact =()=>{
        setTitleStyle(3);
        
    }
    


    // UseEffect---------------------------------------------------------
    useEffect(()=>{
      console.log("list class ",navBar.current.classList[0]);
      animationObserverOnScroll(navBar.current.classList[0],background.current.classList[0],Styles.navigation_bar_Scrollstate);
    },[])


    return (
        <div className={Styles.home_vitrine}>
            <header ref={background} className={Styles.header}>
                    <div ref={navBar}  className={Styles.navigation_container}>
                        <nav  className={Styles.navigation_bar_Upstate}>
                            <Link class={titleStyle === 1 ? Styles.selected_title : ""}  onClick={handleClickHome}  >Home</Link>
                            <Link class={titleStyle === 2 ? Styles.selected_title : ""}  onClick={handleClickDetails}  >Détails</Link>
                            <Link class={titleStyle === 3 ? Styles.selected_title : ""}   onClick={handleClickContact} >Contact</Link>
                            <div className={Styles.selected_bar + " "+ (titleStyle == 1 ? Styles.selected_barpos1  : (titleStyle == 2 ? Styles.selected_barpos2: Styles.selected_barpos3))}></div>
                        </nav>
                    </div>
                    
            </header>
            <main className={Styles.main}>
                    <VitrineContent className={Styles.test}></VitrineContent>
                    <footer className={Styles.footer}>
                        <div className={Styles.container_contact}>
                            <div className={Styles.container_icons_reseaux_sociaux}>
                              <a href="https://www.facebook.com" target="_blank"><img src={FacebookIcon}/></a>
                              <a href="https://www.instagram.com" target="_blank"> <img src={InstagramIcon}  /></a>
                              <a href="https://twitter.com" target="blank">  <img src={TwitterIcon}  /></a>
                            </div>
                            <p>Suivez Nous sur nos réseaux Sociaux </p>
                        </div>

                        <div className={Styles.footer_end}>
                            <p>PFE 2021 Madi Samy</p>
                            <p>@CopyRight 2021: Droits Réservés</p>
                            <p>EN <span>FR</span></p>
                        </div>
                    </footer>
            </main>
            
        </div>
        
    )
}

export default HomeVitrine
