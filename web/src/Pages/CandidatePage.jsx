import React from "react";
import { Container, Row, Col, Button, Alert } from "reactstrap";
import Candidate from "../components/Voting/Candidate";
import { Redirect } from "react-router-dom";
import axios from "axios";
import Popup from "../components/Voting/Popup";


import strings from '../lang/strings';

let data = [
  {
    id: 1,
    firstName: "Harry",
    lastName: "Potter",
    constituency: "Sheffield South East",
    party: "Green Party",
    image: "https://www.thestoreofrequirement.com.au/assets/full/2067.jpg",
    manifesto:
      "Wrong do point avoid by fruit learn or in death. So passage however besides invited comfort elderly be me. Walls began of child civil am heard hoped my. Satisfied pretended mr on do determine by. Old post took and ask seen fact rich. Man entrance settling believed eat joy. Money as drift begin on to. Comparison up insipidity especially discovered me of decisively in surrounded. Points six way enough she its father. Folly sex downs tears ham green forty. "
  },
  {
    id: 2,
    firstName: "Clive",
    lastName: "Betts",
    constituency: "Sheffield South East",
    party: "Labour",
    image:
      "https://res.cloudinary.com/labour-party/image/fetch/w_300,h_300,c_thumb,g_face/https://donation.labour.org.uk/page/file/0ada085dc3d1852a7b_7om6yvoke.jpg",
    manifesto:
      "Wrong do point avoid by fruit learn or in death. So passage however besides invited comfort elderly be me. Walls began of child civil am heard hoped my. Satisfied pretended mr on do determine by. Old post took and ask seen fact rich. Man entrance settling believed eat joy. Money as drift begin on to. Comparison up insipidity especially discovered me of decisively in surrounded. Points six way enough she its father. Folly sex downs tears ham green forty. "
  },
  {
    id: 3,
    firstName: "Wera",
    lastName: "Hobhouse",
    constituency: "Bath",
    party: "Liberal Democrat",
    image:
      "https://assets3.parliament.uk/ext/mnis-bio-person/www.dodspeople.com/photos/62700.jpg.jpg",
    manifesto:
      "Liberal Democrats are open and outward-looking. We passionately believe that Britain’s relationship with its neighbours is stronger as part of the European Union. Whatever its imperfections, the EU remains the best framework for working effectively and co-operating in the pursuit of our shared aims. It has led directly to greater prosperity, increased trade, investment and jobs, better security, and a greener environment. Britain is better off in the EU."
  }
];

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

    strings.setLanguage(sessionStorage.getItem("lang"))
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
