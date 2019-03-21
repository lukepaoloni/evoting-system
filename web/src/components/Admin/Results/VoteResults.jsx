import React, {Component} from 'react';
import { Container, Form, FormGroup, Input, FormFeedback, Label, FormText, Button } from 'reactstrap';

import Axios from 'axios';

export default class VoteResults extends Component {

  constructor(props) {
    super(props);

    this.state = {
      electionInProgress: false,
      results: []
    };

  }

  async componentDidMount() {

    const token =JSON.parse(sessionStorage.getItem('user')).token;
      await Axios({
        method: 'get',
        url: 'http://localhost:4000/api/rest/configurations',
        headers: {
          "Authorization" : `Bearer ${token}`
        }
        }).then((res,err)=>{
          if (err) {
            console.error(err)
          } else {

            if (res.data[0])
              this.setState({electionInProgress: true});

           console.log(res.data[0].startDate);
          }
        }).catch((err)=>{
              alert(err);
              console.log(err)
          });
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