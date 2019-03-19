import React from 'react'
import {Container, Row, Col, Button} from 'reactstrap'
import {Redirect} from 'react-router-dom'
export default class HomePage extends React.Component{
  constructor(props){
    super(props)

    this.state = {
        logout:false
    }
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
          <h1>Success</h1>
          <p>your vote has gone though</p>
          <Button onClick={this._handleLogout} color="danger">Logout</Button>

          </Col>
         </Row>
        </Container>
        )
    }
}
