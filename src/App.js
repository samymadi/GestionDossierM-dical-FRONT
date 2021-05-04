import {BrowserRouter as Router, Switch,Route} from "react-router-dom"
import Authentication from './Routes/Authentication'
import './App.css'  

function App() {

  return (

    <div className="App">
        <Router>
            <Switch>
              <Route path="/Authentication" strict exact >
                <Authentication/>
              </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
