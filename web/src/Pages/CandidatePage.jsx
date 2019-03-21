import React from "react";
import { Container, Row, Col, Button, Alert } from "reactstrap";
import Candidate from "../components/Voting/Candidate";
import { Redirect } from "react-router-dom";
import axios from "axios";
import Popup from "../components/Voting/Popup";


import strings from '../lang/strings';
import { string } from "postcss-selector-parser";

let candidateSeleted = 0;
let checkboxIds = [];
export default class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      data: [],
      config: null,
      disable: false,
      showPopup: false,
      selectedCandidates: [{
        firstName: null,
        lastName:null,
        candidateId: null,
        priority: null
      }],
      VoteSuccess: false
    };

    strings.setLanguage(sessionStorage.getItem("lang"))
  }

  async componentWillMount() {
    const user = JSON.parse(sessionStorage.getItem("user"));
    const token = user.token;

    let res;
    try {
      res = await axios.get(`/api/rest/auth/me/constituency`,{
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
          //console.log(config.data)
      this.setState({user:user, data: res.data, config:config.data[0] });
      
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
    // axios.post(
    //   '/api/rest/votes', {
    //     userId: this.state.user.token,
    //     candidateId: this.state.selectedCandidates.id
    //     }, {
    //       headers: {
    //           'Authorization': `Bearer ${this.state.user.token}`
    //       }
    //   })
    // window.location.reload();
    // this.setState({ VoteSuccess: true });
  }

  _onCheckboxClick = e => {
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
    
    // checkboxIds.push(e.target.value);
    // let candidate = this.state.data.find(i => {
    //   return i.id === parseInt(e.target.value) ? i: null;
    // });
    // candidateSeleted += 1;
    // if (candidateSeleted >= 1)
    //   this.setState({ disable: true, selectedCandidates: candidate });
      
  };

  _onResetCandidate = e => {
    this.setState({ disable: false });
    window.location.reload();
  };

   _vote = async() => {
      await axios.post(
      '/api/rest/votes', {
        votes: this.state.selectedCandidates
      }, {
          headers: {
              Authorization: `Bearer ${this.state.user.token}`
          }
      }
  ).then(()=>{
        this.setState({ showPopup: true });
      }).catch((err)=>{
        alert("something gone wrong, please try again in few minutes")
      })
    // console.log("getting and storing the votes");
  };


  render() {
    let inputConfig = "radio";
    if(this.state.config && this.state.config.limit>=2)
    {
      //if(this.state.config.limit>=2)
        inputConfig = "checkbox"
    }
    if (this.state.VoteSuccess) return <Redirect to={"/success"} />;
    return (
   
      <div>
           <Container style={{marginBottom:30}}>
        <Row>
          <Col
            sm="12"
            md={{ size: 12 }}
            style={{ backgroundColor: "silver", textAlign: "center" }}
          >
            <h1>{strings.cand_title}</h1>
            <p>
                {strings.cand_voteHelp}
            </p>
          </Col>
        </Row>
        {this.state.data.map(e => {
          return (
            <Candidate data={e} key={e.id}>
              <input
                key={e.id}
                name="isGoing"
                type={inputConfig}
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
              {strings.cand_reset}
            </Button>
          </Col>
          <Col className="offset-3 col-6">
            <Button color="primary" onClick={this._vote}>
              {strings.header_castVote}
            </Button>
          </Col>
        </Row>
        {this.state.showPopup ? (
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
