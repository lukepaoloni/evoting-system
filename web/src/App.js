import React, { Component } from 'react';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage'
import Header from './components/Header';
import Footer from './components/Footer';
import VotePage from './Pages/CandidatePage';
import AdminConfig from './components/Admin/AdminConfig';
import SuccessPage from './Pages/SuccessPage'

import strings from './lang/strings';

import {BrowserRouter, 
        Route, 
        Switch, 
        Redirect} from 'react-router-dom'

import './App.css';
const err = () =>{
  return(
      <div>error</div>
  )
}
// const User = (params) =>{
//   return(
//       <div>{"Welcome"} :{params.userId} </div>
//   )
// }

class App extends Component {
  
  render() {
      if (sessionStorage.getItem("lang") === null) {
        sessionStorage.setItem("lang","en");
      }
    return (
      <BrowserRouter>
                   <div>
                     <Header/> 
                   {/* <Navigation/> */}
                    <Switch>
                         <Route path="/vote" exact render={()=>(
                            (sessionStorage.getItem('user')) ? (<VotePage/>):  (<Redirect to='/login' />)
                        )}/> 
                        <Route path="/login" component={LoginPage}/>
                        <Route path="/" exact component={HomePage}/>
                        <Route path="/success" exact component={SuccessPage}/>
                          <Route path="/admin" exact render={()=>(
                            (sessionStorage.getItem('user')) ? (JSON.parse(sessionStorage.getItem('user')).role == "admin") ? 
                                        (<AdminConfig/>):  (<Redirect to='/vote' />):  (<Redirect to='/login' />)
                          )}/> 
                        <Route component={err} />
                    </Switch>

                     <Footer/> 

                   </div>
        </BrowserRouter>
    );
  }
}

export default App;
