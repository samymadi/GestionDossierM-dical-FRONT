import {useState} from 'react';
import {BrowserRouter as Router, Switch,Route} from "react-router-dom"
import Authentication from './Routes/Authentication'
import HomeVitrine from './Routes/HomeVitrine'
import Error404 from './Routes/Error404'
import EmailConfirmation from './Routes/confidentialite/EmailConfirmation'
import ResetPassword from './Routes/confidentialite/ResetPassword';
import './App.css'  



// ------Compnent test import -------------------------------------
import Test from './Component/InputComponent/InputComponent'

function App() {

    const [login,setLogin]= useState(false);  
    
    return (

    <div className="App">
        <Router>
            <Switch>
              <Route path="/test/ComponentTest"><Test password={true}>{{placeholder:"name",inputTitle:"Email"}}</Test></Route>
              <Route path="/Authentication/:signin" strict exact><Authentication/></Route>
              <Route path="/ResetPassword"><ResetPassword/></Route>
              <Route path='/ConfirmEmail'><EmailConfirmation></EmailConfirmation></Route>

              <Route path="/Home">
                 {login ?  <h1>Pas Encore faite</h1> : <HomeVitrine/> }
              </Route>


              <Route><Error404></Error404></Route>

            </Switch>
        </Router>
    </div>
  );
}

export default App;
