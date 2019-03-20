import React from "react";
import { Container, Row, Col, Button, Alert } from "reactstrap";
import Candidate from "../components/Voting/Candidate";
import { Redirect } from "react-router-dom";
import axios from "axios";
import Popup from "../components/Voting/Popup";

let candidateSeleted = 0;
let checkboxIds = [];
export default class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      data: [],
      disable: false,
      showPopup: false,
      selectedCandidate: {},
      VoteSuccess: false
    };
  }

  async componentWillMount() {
    const user = JSON.parse(sessionStorage.getItem("user"));
    const token = user.token;

    let res;
    try {
      res = await axios.get(
        `/api/rest/auth/me/constituency`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        let config = await axios.get(
          `/api/rest/configurations`,
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
          console.log(config.data[0].id)
      // console.log(res.data[0]);
      this.setState({user:user, data: res.data });
      
    } catch (error) {
      console.log("failed to get Constituencies");
      console.log(error);
    }
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
  confirmPopup() {
    console.log(this.state.user.id)
    console.log(this.state.selectedCandidate.id)
    console.log(this.state.user.token)
    console.log()
    // axios.post(
    //   '/api/rest/votes', {
    //     userId: this.state.user.token,
    //     candidateId: this.state.selectedCandidate.id
    //     }, {
    //       headers: {
    //           'Authorization': `Bearer ${this.state.user.token}`
    //       }
    //   })
    // window.location.reload();
    this.setState({ VoteSuccess: true });
  }

  _onCheckboxClick = e => {
    checkboxIds.push(e.target.value);
    let candidate = this.state.data.find(i => {
      return i.id === parseInt(e.target.value) ? i: null;
    });
    candidateSeleted += 1;
    if (candidateSeleted >= 1)
      this.setState({ disable: true, selectedCandidate: candidate });
      
  };


  _onResetCandidate = e => {
    this.setState({ disable: false });
    window.location.reload();
  };

  _vote = () => {
    this.setState({ showPopup: true });
    console.log("getting and storing the votes");
  };
  render() {
    if (this.state.VoteSuccess) return <Redirect to={"/success"} />;
    return (
   
      <div>
        {
          console.log(this.state.data)
        }
           <Container style={{marginBottom:30}}>
        <Row>
          <Col
            sm="12"
            md={{ size: 12 }}
            style={{ backgroundColor: "silver", textAlign: "center" }}
          >
            <h1>All Candidates</h1>
            <p>
              vote for one candidate by clicking the check box next to it,
              scroll down and click "Vote Now" button to confirm
            </p>
          </Col>
        </Row>
        {this.state.data.map(e => {
          return (
            <Candidate data={e} key={e.id}>
              <input
                key={e.id}
                name="isGoing"
                type="radio"
                style={{ height: 60, width: 50 }}
                disabled={this.state.disable}
                onClick={this._onCheckboxClick}
                value={e.id}
              />
            </Candidate>
          );
        })}

        <Row>
          <Col className="col-3">
            <Button color="danger" onClick={this._onResetCandidate}>
              Reset selected candidate
            </Button>
          </Col>
          <Col className="offset-3 col-6">
            <Button color="primary" onClick={this._vote}>
              Vote
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
      
      <footer style={{
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
            fontSize:20
        }}>Totla <strong>{this.state.data.length}</strong> candidates,  scroll to view more </footer>
      </div>
    );
  }
}
