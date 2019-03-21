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
  

  async componentDidMount() {
    let candidates = [];
    try {
      const res = await axios.get(
        "http://localhost:4000/api/rest/votes/results",
      );
      this.setState({data : res.data})
      for (var key in this.state.data) {
        const res = await axios.get(
          `http://localhost:4000/api/rest/candidates/${key}/getOne`,
        );
        res.data.votes = this.state.data[key];
        candidates.push(res.data);
    }
    } catch (err) {
      console.error(err);
      console.log("error", err.response.data.message);
      this.notifyError(err.response.data.message);
    }
    // console.log(candidates);
    this.setState({candidates: candidates});

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
              <p>Number of Votes: <b>{e.votes}</b></p>
            </div>
              )
            })
            }
            {this.state.candidates && 
              <CSVLink data={this.state.candidates}>Download me</CSVLink>
            }
          </Container>
          

      </div>
    );
    }
    
}