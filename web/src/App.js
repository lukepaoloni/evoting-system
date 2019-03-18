import React, { Component } from 'react';
import HomePage from './Pages/HomePage'
import LoginPage from './Pages/LoginPage'
import Navigation from './Component/Navigation'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'


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
                   <Navigation/>
                   <Switch>
                    <Route path="/" exact render={()=>(
                        (sessionStorage.getItem('user')) ? (<HomePage/>):  (<Redirect to='/login' />)
                    )}/>
                    <Route path="/login" component={LoginPage}/>
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
                   </div>
                </BrowserRouter>
    );
  }
}

export default App;
