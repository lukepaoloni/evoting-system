import React, { Component } from "react";
import {
  Container,
  FormGroup,
  Input,
  FormFeedback,
  Label,
  Button
} from "reactstrap";
import axios from "axios";
import DatePicker from "react-datepicker";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-datepicker/dist/react-datepicker.css";

export default class AdminConfig extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: new Date(),
      endDate: new Date(),
      voteType: "first_pass",
      limit: 1,
      firstAttempt: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleEndChange = this.handleEndChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  async componentWillMount() {
    if (this.state.firstAttempt) {
      try {
        const res = await axios.get(
          "http://localhost:4000/api/rest/configurations"
        );
        this.setState({
          startDate: new Date(res.data.startDate),
          endDate: new Date(res.data.endDate),
          voteType: res.data.voteType,
          limit: res.data.limit,
          firstAttempt: true
        });
      } catch (err) {
        console.error(err);
        this.notifyError(err.response);
      }
    }
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

  notifySuccess = content => {
    toast.success(content, { position: "top-center" });
  };

  notifyError = content => {
    toast.error(content, { position: "top-center" });
  };

  async onSubmit() {
    if (this.state.startDate < this.state.endDate) {
      const startdates = this.state.startDate.toString("yyyy-MM-dd HH:mm:ss");
      const endDates = this.state.endDate.toString("yyyy-MM-dd HH:mm:ss");
      const token = JSON.parse(sessionStorage.getItem("user")).token;

      await axios({
        method: "put",
        url: "http://localhost:4000/api/rest/configurations",
        headers: {
          Authorization: `Bearer ${token}`
        },
        data: {
          startDate: startdates,
          endDate: endDates,
          voteType: this.state.voteType,
          limit: parseInt(this.state.limit)
        }
      })
        .then((res, err) => {
          if (err) {
            console.error(err);
            this.notifyError("Unable to save configuration.");
          } else {
            this.notifySuccess("Successfully saved configuration.");
          }
        })
        .catch(err => {
          this.notifyError("Unable to save configuration.");
          console.log(err);
        });
    } else {
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
    const { startDate, endDate, limit, voteType } = this.state;
    return (
      <div>
        <Container>
          <h1>Configure Election</h1>
          <ToastContainer autoClose={8000} />
          <div className="row justify-content-center align-items-center">
            <div className="col-sm-12 col-md-6">
              <FormGroup>
                <Label for="startDate">Start Date</Label>
                <br />
                <DatePicker
                  selected={startDate}
                  onChange={this.handleChange}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={15}
                  dateFormat="MMMM d, yyyy h:mm aa"
                  timeCaption="time"
                />
                <FormFeedback>Required</FormFeedback>
              </FormGroup>
            </div>
            <div className="col-sm-12 col-md-6">
              <FormGroup>
                <Label for="endDate">End Date</Label>
                <br />
                <DatePicker
                  selected={endDate}
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
            </div>
            <div className="col-sm-12 col-md-6">
              <FormGroup>
                <Label for="endDate">Vote Type</Label>
                <br />
                <Input
                  type="select"
                  name="voteType"
                  onChange={this.handleInputChange}
                  id="exampleSelectMulti"
                >
                  <option
                    value="first_past"
                    selected={voteType === "first_past" ? true : false}
                  >
                    First Past
                  </option>
                  <option
                    value="preferential"
                    selected={voteType === "preferential" ? true : false}
                  >
                    Preferencial
                  </option>
                  <option
                    value="transferable"
                    selected={voteType === "transferable" ? true : false}
                  >
                    Transferrable
                  </option>
                </Input>
              </FormGroup>
            </div>
            <div className="col-sm-12 col-md-6">
              <FormGroup>
                <Label for="limit">Vote Limit</Label>
                <Input
                  type="number"
                  placeholder="Limit"
                  name="limit"
                  onChange={this.handleInputChange}
                  required
                  value={limit}
                />
                <FormFeedback>Required</FormFeedback>
              </FormGroup>
            </div>
            <div className="col-12">
              <Button type="submit" onClick={this.onSubmit} color="success">
                Start Election
              </Button>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
