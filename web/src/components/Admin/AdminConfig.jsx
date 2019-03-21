import React, {Component} from 'react';
import { Container, FormGroup, Input, FormFeedback, Label, Button } from 'reactstrap';
import Axios from 'axios';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


export default class AdminConfig extends Component {

  constructor(props) {
    super(props);

    this.state = {
      startDate : new Date(),
      endDate : new Date(),
      voteType : 'first_past',
      limit : 1
    };


     this.handleInputChange = this.handleInputChange.bind(this);
     this.handleChange = this.handleChange.bind(this);
     this.handleEndChange = this.handleEndChange.bind(this);
     this.onSubmit = this.onSubmit.bind(this);
  }

  async handleInputChange(event) {
      const target = event.target;
      if (target.value === null) {
        target.valid = true;
      } else {
        target.valid = false;
      }
      const name = target.name;
      this.setState({ [name]: target.value });
  }

  async onSubmit() {
    if(this.state.startDate < this.state.endDate)
    {
      const startdates = this.state.startDate.toString('yyyy-MM-dd HH:mm:ss');
      const endDates = this.state.endDate.toString('yyyy-MM-dd HH:mm:ss');
      const token = JSON.parse(sessionStorage.getItem('user')).token;

      await Axios({
        method: 'put',
        url: 'http://localhost:4000/api/rest/configurations',
        headers: {
          "Authorization" : `Bearer ${token}`
        },
        data: {'startDate' : startdates, 'endDate' : endDates, 'voteType' : this.state.voteType, 'limit' : parseInt(this.state.limit)}
        }).then((res,err)=>{
          if (err) {
            console.error(err)
          } else {
            alert(res.data.message)
          }
        }).catch((err)=>{
              alert(err);
              console.log(err)
          });
    }
    else {
      alert("Set End date after Start date");
    }
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  handleEndChange(date) {
    this.setState({
      endDate: date
    });
  }

    render() {

    return (
      <div>
          <Container> 
            <h1>Configure Election</h1>
              <FormGroup>
                <Label for="startDate">Start Date</Label><br />
                <DatePicker
                  selected={this.state.startDate}
                  onChange={this.handleChange}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={15}
                  dateFormat="MMMM d, yyyy h:mm aa"
                  timeCaption="time"
                />
                <FormFeedback>Required</FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label for="endDate">End Date</Label><br />
                <DatePicker
                  selected={this.state.endDate}
                  onChange={this.handleEndChange}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={15}
                  dateFormat="MMMM d, yyyy h:mm aa"
                  timeCaption="time"
                  name="endDate"
                />
                <FormFeedback>Required</FormFeedback>
              </FormGroup>
              <FormGroup>
                <Input type="select" name="voteType" onChange={this.handleInputChange} id="exampleSelectMulti">
                  <option value="first_past">First Past</option>
                  <option value="preferential">Preferencial</option>
                  <option value="transferable">Transferrable</option>
                </Input>
              </FormGroup>
              <FormGroup>
              <Label for="limit">Vote Limits</Label>
                <Input type="number" placeholder="Limit" name="limit" onChange={this.handleInputChange} required></Input>
                <FormFeedback>Required</FormFeedback>
              </FormGroup>
              <Button type="submit" onClick={this.onSubmit} color="success">
                Start Election 
              </Button>
          </Container>
          
      </div>
    );
    }
    
}