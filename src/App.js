import {BrowserRouter as Router, Switch,Route} from "react-router-dom"
import Authentication from './Routes/Authentication'

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
