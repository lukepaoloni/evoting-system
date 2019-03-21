import React, {Component} from 'react';
import { Container, Form, FormGroup, Input, FormFeedback, Label, FormText, Button } from 'reactstrap';
import axios from 'axios'

export default class VoteResults extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data : [],
    };
    
  }

  async componentDidMount() {
    try {
      const res = await axios.get(
        "http://localhost:4000/api/rest/votes/results",
      );
      this.setState({data : res.data})
      this.state.data.forEach(

      )
      console.log(this.state.data);
    } catch (err) {
      console.error(err);
      console.log("error", err.response.data.message);
      this.notifyError(err.response.data.message);
    }

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