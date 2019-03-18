import React, { Component } from 'react';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage'
 import Header from './components/Header';
 import Footer from './components/Footer';

import AdminConfig from './components/Admin/AdminConfig';

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
    return (
      <BrowserRouter>
                   <div>
                     <Header/> 
                   {/* <Navigation/> */}
                    <Switch>
                         {/* <Route path="/" exact render={()=>(
                            (sessionStorage.getItem('user')) ? (<HomePage/>):  (<Redirect to='/login' />)
                        )}/>  */}
                        <Route path="/login" component={LoginPage}/>
                        <Route path="/" exact component={HomePage}/>

                        <Route path="/admin" exact component={AdminConfig}/>
                        {/* <Route path="/vote"  render={()=>(
                            (sessionStorage.getItem('user')) ? (<DownloadView/>):  (<Redirect to='/login' />)
                        )}/>
                        <Route path="/list"  render={()=>(
                            (sessionStorage.getItem('user')) ? (<Upload/>):  (<Redirect to='/login' />)
                        )}/>
                        <Route path="/admin/:userId"  render={({match})=>(
                            (sessionStorage.getItem('user')) ? (<User userId={match.params.userId}/>):  (<Redirect to='/login' />)
                        )}/> */}
                        <Route component={err} />
                    </Switch>

                     <Footer/> 

                   </div>
        </BrowserRouter>
    );
  }
}

export default App;
