import React, {Component} from 'react';
import { Container } from 'reactstrap';
import axios from 'axios'
import { CSVLink, CSVDownload } from "react-csv";


export default class VoteResults extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data : [],
      candidates : null,
    };
    
  }
  

  async componentWillMount() {
    let notNullArray = [];
    try {
      const res = await axios.get(
        "http://localhost:4000/api/rest/votes/results",
      );
      res.data.forEach(element => {
        if(element != null)
        notNullArray.push(element);
      });
    } catch (err) {
      console.error(err);
      console.log("error", err.response.data.message);
      this.notifyError(err.response.data.message);
    }
    // console.log(candidates);
    this.setState({candidates: notNullArray});
  }
  
    render() {
    // const { validated } = this.state;
    return (
      <div>
          <Container> 
            <h1>Election Results</h1>
            {this.state.candidates && 
            this.state.candidates.map(e => {
              return (
            <div key={e.id}>
              <p>First Name: <b>{e.firstName}</b></p>
              <p>Last Name: <b>{e.lastName}</b></p>
              <p>Number of Votes: <b>{e.numOfVotes}</b></p>
              <br/>
            </div>
              )
            })
            }
            {this.state.candidates && 
              <CSVLink data={this.state.candidates}>Download me{console.log(this.state.candidates)}</CSVLink>
            }
          </Container>
          

      </div>
    );
    }
    
}