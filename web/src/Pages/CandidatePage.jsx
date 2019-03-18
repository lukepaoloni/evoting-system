import React from 'react'
import {Container, Row, Col, Button} from 'reactstrap'
import Candidate from '../components/Voting/Candidate'
let   data = {
  image:"https://www.thestoreofrequirement.com.au/assets/full/2067.jpg",
  name: "Hogwarts",
  manifesto: "Wrong do point avoid by fruit learn or in death. So passage however besides invited comfort elderly be me. Walls began of child civil am heard hoped my. Satisfied pretended mr on do determine by. Old post took and ask seen fact rich. Man entrance settling believed eat joy. Money as drift begin on to. Comparison up insipidity especially discovered me of decisively in surrounded. Points six way enough she its father. Folly sex downs tears ham green forty. "
}
let candidateSeleted = 0
export default class HomePage extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      disable: false
    }
  }
_onClick = () =>{
  candidateSeleted +=1
  if(candidateSeleted >= 2)
    this.setState({disable:true})
}
_onResetCandidate = (e) =>{
  this.setState({disable: false})
  window.location.reload(); 
}

_vote = () =>{
  console.log("getting and storing the votes");
}
    render(){
        return(
        <Container>
            <Row>
          <Col sm="12" md={{ size: 12 }}  style={{backgroundColor:'silver'}}>
          <h1>All Candidates</h1>
          <p>vote for one candidate by clicking the check box next to it,
            scroll down and click "Vote Now" button to confirm
          </p>
          </Col>
          </Row>

          <Candidate data = {data}> 
          <input
            name="isGoing"
            type="checkbox" 
            style={{ height: 50, width: 50}}
            disabled={this.state.disable}
            onClick={this._onClick}
            />
          </Candidate>
          <Candidate data = {data}>
          <input
            name="isGoing"
            type="checkbox" 
            style={{ height: 50, width: 50}}
            disabled={this.state.disable}
            onClick={this._onClick}

            />
          </Candidate>
          <Candidate data = {data}>
          <input
            name="isGoing"
            type="checkbox" 
            style={{ height: 50, width: 50}}
            disabled={this.state.disable}
            onClick={this._onClick}

            />
          </Candidate>
          <Row>
            <Col className="col-3">
              <Button color="danger" onClick={this._onResetCandidate}>Reset selected candidate</Button>
            </Col>
            <Col className="offset-3 col-6">
              <Button color="primary" onClick={this._vote}>Vote</Button>
            </Col>
          </Row>
        </Container>
        )
    }
}