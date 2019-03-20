import React from 'react'
import {Container, Row, Col, Button} from 'reactstrap'
import {Redirect} from 'react-router-dom'

import strings from '../lang/strings';

export default class HomePage extends React.Component{
  constructor(props){
    super(props)

    this.state = {
        logout:false
    }

    strings.setLanguage(sessionStorage.getItem("lang"))
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
          <p>{strings.vote_info}</p>
          <Button onClick={this._handleLogout} color="danger">
              {strings.logout}
          </Button>

          </Col>
         </Row>
        </Container>
        )
    }
}
