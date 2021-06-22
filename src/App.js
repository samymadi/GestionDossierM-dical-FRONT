import React,{useState,useEffect,createContext} from 'react';

import {BrowserRouter as Router, Switch,Route, Redirect,useHistory} from "react-router-dom"

import AuthContext from './Context/AuthContext';

import Cookies, { set } from 'js-cookie';
import axios from 'axios';

import Authentication from './Routes/Authentication'
import HomeVitrine from './Routes/HomeVitrine'
import Error404 from './Routes/Error404'
import EmailConfirmation from './Routes/confidentialite/EmailConfirmation'
import ResetPassword from './Routes/confidentialite/ResetPassword';
import Account from './Routes/Account/Account'
import Dashboard from './Routes/Dashboard/Dashboard'; 

import {HttpRequest} from './Models/User';

import Loading from './Component/Loading/Loading';


// ------Compnent test import -------------------------------------
import Test from './Component/AlertMessage/AlertMessage'
import Send from './Assests/Icons/Send.png'
import DashBoardMenu from './Component/DashBoard/DashBoardMenu';
import DossierMed from './Component/DashBoard/DossierMed';
import AdminDashBoard from './Routes/AdminDashBoard';



class  App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state={
      signin:false,
      loading:true,
      privileges:null,
      close:false

    }
  }

    

    //Verifier si il ya le cookie session pour faire une requete et valider le chargement de la page Sinon ignorer
 async componentDidMount(){

  const session = Cookies.getJSON("SessionAuth");
  const Request = new HttpRequest("session",session);
  
      if(!session) {  this.setState({loading:false}); return;}

      await  axios.post("http://localhost:8000/authentification/checkSession",Request,{headers:{
        'Content-Type':'application/json'
      }})

      .then((result)=>{
        if(result.status == 200)
            {
              this.setState({signin:true})
              this.setState({privileges:result.data.Privileges})
            }
              
          this.setState({loading:false})
      })
      .catch(err=>{console.log(err); this.setState({loading:false})})

    }
    
  


 
  render(){
    if(this.state.loading)
      return <Loading></Loading>


    return (
    
    <div className="App">
        <Router>
          <AuthContext.Provider value={this.state.privileges}>
            <Switch>
            
              {/* Test Routes----------------------------------------------- */}
              <Route path="/test/ComponentTest">
              <Test close={this.setState} type='message'></Test>
               
              </Route>

              {/* Principal Routes---------------------------------------------- */
              // ------------------------------------------------------------------ 
              }

              {/* -----------Confidentialité----------------------------------------- */}
              <Route    exact path="/Authentication/:signin" component={()=>{  return(
                     !this.state.signin   ?  <Authentication/> : <Redirect  to="/Dashboard"/>
              )}}>
                  
              </Route>

              <Route path="/ResetPassword" component={()=>(
                 this.state.signin ?  <ResetPassword/> : <Redirect to="/Authentication/true"/>
              )}/>
              
              <Route path='/ConfirmEmail' component={()=>(
                 !this.state.signin ?  <EmailConfirmation/> : <Redirect to="/Authentication/true"/>
              )} />


              {/* -------------Account------------------------------------------------- */}

                <Route path="/Account" component={()=>{ if(this.state.privileges == 4) return ( <Redirect to='/Admin/DashboardAdmin'/>);  return(
                     this.state.signin ?  <Account/> : <Redirect to="/Authentication/true" /> 
                )}}/>
                
              

                <Route path="/Dashboard" component={()=>{ if(this.state.privileges == 4) return ( <Redirect to='/Admin/DashboardAdmin'/>); return(
                   this.state.signin ? <Dashboard/> : <Redirect  to="/Authentication/true"/>
                )}}>
                 
                  </Route>
              
                  <Route path='/Admin/DashboardAdmin' component={()=>(
                    this.state.signin && this.state.privileges == 4  ? <AdminDashBoard></AdminDashBoard> : <Redirect to='/Authentication/true'/>
                  )}></Route>

              {/* ----------Home------------------------------------------------------------- */}


              <Route exact path="/">
                <Redirect to='/Home'/>
              </Route>   
                   
              <Route path="/Home">
                 { <HomeVitrine/>  }
              </Route>


              <Route><Error404/></Route>   {/* Route page 404 not found  */}

            </Switch>
          </AuthContext.Provider>
        </Router>
    </div>
  );
     }


    }







export default App;



