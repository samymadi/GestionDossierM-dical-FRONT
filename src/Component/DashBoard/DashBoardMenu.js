import Styles from '../../Styles/Dashboard/DashboardMenu.module.css';


// -----------------------------Component Imports----------------------
import RappelEvent from './RappelEvent';

function DashBoardMenu() {
    const {dash_container,left_container,right_container} = Styles;
    return (
        <div className={dash_container}>
                <div className={left_container}>
                    <RappelEvent></RappelEvent>

                </div>
                <div className={right_container}>
                    <h1></h1>
                </div>
        </div>
    )
}

export default DashBoardMenu
    