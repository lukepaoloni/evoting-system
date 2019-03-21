import React, {Component} from 'react';
import { Container } from 'reactstrap';
import { CSVLink, CSVDownload } from "react-csv";
import axios from 'axios'
 
const csvData = [
  ["firstname", "lastname", "email"],
  ["Ahmed", "Tomi", "ah@smthing.co.com"],
  ["Raed", "Labes", "rl@smthing.co.com"],
  ["Yezzi", "Min l3b", "ymin@cocococo.com"]
];

export default class VoteResults extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: null
    };

    
  }

  async componentWillMount() {
    // await axios({
    //   method: 'post',
    //   url: 'http://localhost:4000/api/rest/config/getMeResultsPlox',
    //   // data: Loginuserdetails
    // }).then((req,res)=>{

    // }).catch((err)=>{
    //     alert("WRONG USERNAME OR PASSWORD")
    //     console.log(err)
    // });

  }
  
    render() {

    return (
      <div>
          <Container> 
            <h1>Election Results</h1>
            <CSVLink data={csvData}>Download me</CSVLink>;
            </Container>
      </div>
    );
    }
    
}