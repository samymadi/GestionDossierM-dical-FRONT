import {useState,useEffect} from 'react';
import {BrowserRouter as Router, Switch,Route, Redirect,useHistory} from "react-router-dom"
import Authentication from './Routes/Authentication'
import HomeVitrine from './Routes/HomeVitrine'
import Error404 from './Routes/Error404'
import EmailConfirmation from './Routes/confidentialite/EmailConfirmation'
import ResetPassword from './Routes/confidentialite/ResetPassword';
import Account from './Routes/Account/Account'
import Dashboard from './Routes/Dashboard/Dashboard';
import './App.css'  




// ------Compnent test import -------------------------------------
import Test from './Component/DashBoard/NotifPopUp'
import Send from './Assests/Icons/Send.png'
import DashBoardMenu from './Component/DashBoard/DashBoardMenu';
import DossierMed from './Component/DashBoard/DossierMed';

function App() {
  
  const [signin,setSignin]= useState(true);  
  const [value,setValue]= useState("Madi");
    
      

    return (

    <div className="App">
        <Router>
            <Switch>
              {/* Test Routes----------------------------------------------- */}
              <Route path="/test/ComponentTest">
                <Test></Test>
               
              </Route>

              {/* Principal Routes---------------------------------------------- */
              // ------------------------------------------------------------------ 
              }

              {/* -----------Confidentialité----------------------------------------- */}
              <Route  path="/Authentication/:signin" strict exact>
                  <Authentication/> 
              </Route>

              <Route path="/ResetPassword"><ResetPassword/></Route>
              
              <Route path='/ConfirmEmail'><EmailConfirmation></EmailConfirmation></Route>


              {/* -------------Account------------------------------------------------- */}

                <Route path="/Account">
                  {signin ?  <Account/> : <Redirect to="/Authentication/true" /> 
                 
                  }
                </Route>

                <Route path="/Dashboard"><Dashboard/></Route>
              


              {/* ----------Home------------------------------------------------------------- */}

              <Route path="/Home">
                 {signin ? <HomeVitrine/>   : <Redirect to='/Authentication/true'/> }
              </Route>


              <Route><Error404/></Route>   {/* Route page 404 not found  */}

            </Switch>
        </Router>
    </div>
  );
}

export default App;



