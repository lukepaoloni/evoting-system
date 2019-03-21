import React from "react";
import { Container, Row, Col, Button,Spinner } from "reactstrap";
import Candidate from "../components/Voting/Candidate";
import { Redirect } from "react-router-dom";
import axios from "axios";
import Popup from "../components/Voting/Popup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import strings from "../lang/strings";

import { connect } from "react-redux";
import { string } from "postcss-selector-parser";

class CandidatePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      data: [],
      config: null,
      showPopup: false,
      selectedCandidate: {},
      VoteSuccess: false,
      voteType: "",
      limit: 1,
      options: []
    };

    strings.setLanguage(sessionStorage.getItem("lang"));
  }

  //outout: get cadidate that belong to user constituency
  //output: get vote config setting
  async componentWillMount() {
    const user = JSON.parse(sessionStorage.getItem("user"));
    const token = user.token;

    try {
      let res = await axios.get(`http://localhost:4000/api/rest/auth/me/constituency`,{
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      let config = await axios.get(
        `http://localhost:4000/api/rest/configurations`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      res.data.forEach(item => {
        item.isSelected = false;
      });
      let options = [];
      for (let i = 1; i <= config.data.limit; i++) {
        options.push(i);
      }
      this.setState({
        user: user,
        data: res.data,
        voteType: config.data.voteType,
        limit: config.data.limit,
        options
      });
    } catch (error) {
      console.error(error);
    }
  }

  //output: show vote confirmation popup
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
  confirmPopup = async () => {
    try {
      const { data } = this.state;
      let formattedData = [];
      data.forEach(item => {
        if (item.isSelected) {
          formattedData.push({
            candidateId: item.id,
            priority: item.priority
          });
        }
      });
      const res = await axios.post(
        "http://localhost:4000/api/rest/votes",
        {
          votes: formattedData
        },
        {
          headers: {
            Authorization: `Bearer ${this.state.user.token}`
          }
        }
      );
      this.setState({ VoteSuccess: true });
      this.notifySuccess(res.data.message);
    } catch (err) {
      this.notifyError(err.response.data.message);
    }
  };

  _onCheckboxClick(id, event) {
    const checkboxes = this.state.data;
    let checked = 0;
    checkboxes.forEach(checkbox => {
      if (checkbox.isSelected) {
        checked += 1;
      }
    });

    checkboxes.forEach(checkbox => {
      if (id === checkbox.id) {
        if (checkbox.isSelected) checkbox.isSelected = event.target.checked;
        else if (checked < this.state.limit) {
          checkbox.isSelected = event.target.checked;
        }
      }
    });

    this.setState({
      data: checkboxes
    });
  }

  notifySuccess = content => {
    toast.success(content, { position: "top-center" });
  };

  notifyError = content => {
    toast.error(content, { position: "top-center" });
  };

  _vote = () => {
    const { data, limit } = this.state;
    let selected = 0;
    data.forEach(item => {
      if (item.isSelected) {
        selected += 1;
      }
    });
    if (selected < limit) {
      this.notifyError(`You have ${limit - selected} outstanding vote.`);
      return;
    }
    if (selected > limit) {
      this.notifyError(`You have selected too many candidates.`);
      return;
    }
    this.setState({ showPopup: true });
  };

  onSelectChange(id, e) {
    const { data } = this.state;
    let formatted = [];
    data.forEach(item => {
      if (item.id === id && item.isSelected) {
        item.priority = parseInt(e.target.value);
      }
      formatted.push(item);
    });
    this.setState({
      data: formatted
    });
  }

  render() {
    const { data, limit, options } = this.state;
    if (this.state.VoteSuccess) return <Redirect to={"/success"} />;

    return (
      <div>
        <Container style={{ marginBottom: 30 }}>
          <ToastContainer autoClose={8000} />
          <Row>
            <Col
              sm="12"
              md={{ size: 12 }}
              style={{ backgroundColor: "silver", textAlign: "center" }}
            >
              <h1>{strings.cand_title}</h1>
              <p>{strings.cand_voteHelp}</p>
            </Col>
          </Row>
          {data.map(e => {
            return (
              <Candidate data={e} key={e.id} fontSize={this.props.fontSize}>
                {limit > 1 ? (
                  <React.Fragment>
                    <Checkbox
                      {...e}
                      type="checkbox"
                      onClick={this._onCheckboxClick.bind(this, e.id)}
                    />
                    <select
                      hidden={!e.isSelected}
                      onChange={this.onSelectChange.bind(this, e.id)}
                    >
                      <Options options={options} />
                    </select>
                  </React.Fragment>
                ) : (
                  <Checkbox
                    {...e}
                    onClick={this._onCheckboxClick.bind(this, e.id)}
                  />
                )}
              </Candidate>
            );
          })}
          <Row>
            <Col className="offset-3 col-6">
              <Button color="primary" onClick={this._vote}>
                {strings.header_castVote}
              </Button>
            </Col>
          </Row>
          {this.state.showPopup ? (
            <Popup
              detail={this.state.selectedCandidate}
              closePopup={this.togglePopup.bind(this)}
              confirmPopup={this.confirmPopup.bind(this)}
            />
          ) : null}
        </Container>

        <footer
          style={{
            backgroundColor: "#00b2ff",
            borderTop: "1px solid #E7E7E7",
            textAlign: "center",
            padding: "20px",
            position: "fixed",
            left: "0",
            bottom: "0",
            height: "60px",
            width: "100%",
            justifyItems:'justify',
            fontSize:"20"
        }}>
        <span>{strings.cand_total} </span>
         <strong>{this.state.data.length} </strong> 
        <span>{strings.cand_candidates}</span>
        </footer>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  fontSize: state.accessibility.fontSize
});
export default connect(mapStateToProps)(CandidatePage);

const Options = props => {
  let optionsJsx = [];
  let firstAttempt = false;
  for (const option of props.options) {
    if (!firstAttempt) {
      optionsJsx.push(<option key={999}>Select...</option>);
    }
    optionsJsx.push(
      <option key={option} value={option}>
        {option}
      </option>
    );
    firstAttempt = true;
  }
  return optionsJsx;
};

const Checkbox = props => {
  if (props.type === "checkbox") {
    return (
      <input
        key={props.id}
        name="isGoing"
        className="candidateCheckboxes"
        type="checkbox"
        style={{ height: 60, width: 50 }}
        onChange={props.onClick}
        checked={props.isSelected}
        value={props.id}
      />
    );
  } else {
    return (
      <input
        key={props.id}
        name="isGoing"
        type="radio"
        style={{ height: 60, width: 50 }}
        onClick={props.onClick}
        value={props.id}
      />
    );
  }
};
