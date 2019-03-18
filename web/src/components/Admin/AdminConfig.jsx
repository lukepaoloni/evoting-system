import React, {Component} from 'react';
import { Container, Form, FormGroup, Input, FormFeedback, Label, FormText, Button } from 'reactstrap';

export default class AdminConfig extends Component {

  constructor(props) {
    super(props);

    this.state = {
      validated: false,
      startDate : '',
      endDate : '',
      voteType : ''
    };


     this.handleInputChange = this.handleInputChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleInputChange(event) {
      const target = event.target;

      console.log(target.value);

      if (target.value === null) {
        target.valid = true;
        console.log("test");
      } else {
        target.valid = false;
      }
      const name = target.name;

      this.setState({ [name]: target.value });
  }

  async handleSubmit(event) {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.setState({ validated: true });

    if (form.checkValidity() === true) {
      event.preventDefault();

    }
  }

    render() {
    // const { validated } = this.state;

    return (
      <div>
          <Container> 
            <h1>Configure Election</h1>
            <Form>
              <FormGroup>
                <Label for="startDate">Start Date</Label>
                <Input type="date" name="startDate" onChange={this.handleInputChange} required invalid/>
                <FormFeedback>Required</FormFeedback>
                <FormText>Example help text that remains unchanged.</FormText>
              </FormGroup>
              <FormGroup>
                <Label for="endDate">End Date</Label>
                <Input type="date" name="endDate" onChange={this.handleInputChange} required invalid/>
                <FormFeedback>Required</FormFeedback>
                <FormText>Example help text that remains unchanged.</FormText>
              </FormGroup>
              <FormGroup>
                <Input type="select" name="voteType" onChange={this.handleInputChange} id="exampleSelectMulti">
                  <option>First Pass</option>
                  <option>Preferencial</option>
                  <option>Transferrable</option>
                </Input>
              </FormGroup>
              <Button type="submit" onSubmit={this.onSubmit} color="success">
                Start Election 
              </Button>
            </Form>
          </Container>
      </div>
    );
    }
    
}