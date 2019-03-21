import React, {Component} from 'react';
import { Container, Form, FormGroup, Input, FormFeedback, Label, FormText, Button } from 'reactstrap';

import VoteResults from '../components/Admin/Results/VoteResults';

import Axios from 'axios';

export default class ResultsPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      electionInProgress: false
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
            if (res.data)
              this.setState({electionInProgress: true});
          }
        }).catch((err)=>{
              alert(err);
              console.log(err)
          });
  }
    render() {
    // const { validated } = this.state;
    let results = <p>No election in progress.</p>

    if (this.state.electionInProgress === true) {
      results = <VoteResults/>
    }

    return (
      <div>
          <Container> 

              {results}

          </Container>
      </div>

    );
    }
    
}