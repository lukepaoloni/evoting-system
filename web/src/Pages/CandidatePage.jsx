import React from "react";
import { Container, Row, Col, Button,Spinner } from "reactstrap";
import Candidate from "../components/Voting/Candidate";
import { Redirect } from "react-router-dom";
import axios from "axios";
import Popup from "../components/Voting/Popup";


import strings from '../lang/strings';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      data: [],
      config: null,
      showPopup: false,
      selectedCandidates: [{
        firstName: null,
        lastName:null,
        candidateId: null,
        priority: null
      }],
      VoteSuccess: false,
      isloading:true
    };

    strings.setLanguage(sessionStorage.getItem("lang"))
  }

  //outout: get cadidate that belong to user constituency
  //output: get vote config setting
  async componentWillMount() {
    const user = JSON.parse(sessionStorage.getItem("user"));
    const token = user.token;

    try {
      let res = await axios.get(`/api/rest/auth/me/constituency`,{
          headers: {
            Authorization: `Bearer ${token}`
          }
        })

      let config = await axios.get(
          `/api/rest/configurations`,{
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
      this.setState({user:user, data: res.data, config:config.data[0], isloading:false });
      
    } catch (error) {
      console.log("failed to get Constituencies");
      console.log(error);
    }
  }

  //output: show vote confirmation popup
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  //output: sending vote to database
  async confirmPopup() {
    await axios.post(
      '/api/rest/votes', {
        votes:[ this.state.selectedCandidates]
      }, {
          headers: {
              Authorization: `Bearer ${this.state.user.token}`
          }
      }).then((req,res)=>{
    this.setState({ VoteSuccess: true });

      }).catch((err)=>{
        console.log(err)
        alert("something gone wrong, please try again in few minutes")
      })
  }

//output: save user's selected candidate
  _onRadioButtonClick = e => {
    let candidate = this.state.data.find(i => {
        return i.id === parseInt(e.target.value) ? i: null;
      });
    if(this.state.config.limit == 1){
        this.setState({
          selectedCandidates: {
          firstName: candidate.firstName,
          lastName: candidate.lastName,
          candidateId: candidate.id
        }
      })
    }
  };

  // show confirmation popup box
   _vote = async() => {
    this.setState({ showPopup: true });
  };

  render() {
    // show loading screen
    if (this.state.isloading) return <Spinner size="sm" color="primary" />

    //User successfuly voted, redirect tem to success page
    if (this.state.VoteSuccess) return <Redirect to={"/success"} />;
    
    return (
      <div>
           <Container style={{marginBottom:30}}>
        <Row>
          <Col
            sm="12"
            md={{ size: 12 }}
            style={{ backgroundColor: "silver", textAlign: "center" }}>
            <h1>{strings.cand_title}</h1>
            <p>{strings.cand_voteHelp}</p>
          </Col>
        </Row>

        {//shouw each candidate and radio button
          this.state.data.map(e => {
          return (
            <Candidate data={e} key={e.id}>
              {this.state.config.limit == 1 ?<input
                key={e.id}
                name="isGoing"
                type="radio"
                style={{ height: 60, width: 50 }}
                onClick={this._onRadioButtonClick}
                value={e.id}
              />: null
              }
            </Candidate>
            );
        })}

        <Row>
          <Col className="col-3">
            <Button color="danger" onClick={this._onResetCandidate}>
              {strings.cand_reset}
            </Button>
          </Col>
          <Col className="offset-3 col-6">
            <Button color="primary" onClick={this._vote}>
              {strings.header_castVote}
            </Button>
          </Col>
        </Row>

        {//vote confirmation popup, works for FIRST PASS VOTE only
          this.state.showPopup ? (
          <Popup
            detail={this.state.selectedCandidates}
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
