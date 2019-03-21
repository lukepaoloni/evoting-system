import React from 'react'
import {Container, Row, Col, Button} from 'reactstrap'
import {Redirect} from 'react-router-dom'

import strings from '../lang/strings';

export default class SuccessPage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
        logout:false,
        time:5
    }
    this.interval = null;
    strings.setLanguage(sessionStorage.getItem("lang"))
  }
  componentWillMount(){
    this.interval = setInterval(this.alterTime,1500)
  }
  alterTime= ()=>{
    if(this.state.time >0)
    {
        this.setState({time: this.state.time-1})

    }
    else{

      clearInterval(this.interval);
      this._handleLogout()
    }
    console.log(this.state.time)

  }
  _handleLogout= ()=>{
    sessionStorage.removeItem("user")
    window.location.reload();     
      this.setState({logout:true})
  }
    render(){
        if(this.state.logout)
            return <Redirect to={'/login'}/>
        return(
        <Container>
            <Row>
          <Col sm="12"  style={{backgroundColor:'silver', textAlign:'center', padding:50, margin:'auto'}}>
          <h1>{strings.vote_success}</h1>
          <p>{strings.vote_info} <br/>
          you will be automatically logged out in: 
          <span style={{color:'red'}}> {this.state.time}</span></p>

          <Button onClick={this._handleLogout} color="danger">
              {strings.logout}
          </Button>

          </Col>
         </Row>
        </Container>
        )
    }
}
