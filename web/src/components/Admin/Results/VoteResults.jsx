import React, {Component} from 'react';
import { Container, Form, FormGroup, Input, FormFeedback, Label, FormText, Button } from 'reactstrap';

export default class VoteResults extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };
    
  }

  async componentDidMount() {


  }
  
    render() {
    // const { validated } = this.state;

    return (
      <div>
          <Container> 
            <h1>Election Results</h1>
 
          </Container>
      </div>
    );
    }
    
}