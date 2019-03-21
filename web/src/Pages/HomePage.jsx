import React, { Component } from "react";
import { Jumbotron, Button, Container } from "reactstrap";

import strings from "../lang/strings";

export default class HomeView extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    strings.setLanguage(sessionStorage.getItem("lang"));
  }
  render() {
    return (
      <Container>
        <Jumbotron>
          <h1 className="display-3">{strings.home_title}</h1>
          <p>{strings.home_body}</p>
          <p className="lead">
            <Button id="loginButton" block color="primary" href="login">
              {strings.home_voteBtn}
            </Button>
          </p>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4">
                <h2>
                  {strings.home_security}
                  <span className="fa fa-shield-alt" />
                </h2>
                <p>
                  Donec id elit non mi porta gravida at eget metus. Fusce
                  dapibus, tellus ac cursus commodo, tortor mauris condimentum
                  nibh, ut fermentum massa justo sit amet risus. Etiam porta sem
                  malesuada magna mollis euismod. Donec sed odio dui.{" "}
                </p>
                <p>
                  <a className="btn btn-secondary" href="/" role="button">
                    {strings.home_view} &raquo;
                  </a>
                </p>
              </div>
              <div className="col-md-4">
                <h2>
                  {" "}
                  {strings.home_access} <span className="fa fa-running" />
                </h2>
                <p>
                  Donec id elit non mi porta gravida at eget metus. Fusce
                  dapibus, tellus ac cursus commodo, tortor mauris condimentum
                  nibh, ut fermentum massa justo sit amet risus. Etiam porta sem
                  malesuada magna mollis euismod. Donec sed odio dui.{" "}
                </p>
                <p>
                  <a className="btn btn-secondary" href="/" role="button">
                    {strings.home_view} &raquo;
                  </a>
                </p>
              </div>
              <div className="col-md-4">
                <h2>
                  {strings.home_usability} <span className="fa fa-blind" />
                </h2>
                <p>
                  Donec sed odio dui. Cras justo odio, dapibus ac facilisis in,
                  egestas eget quam. Vestibulum id ligula porta felis euismod
                  semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris
                  condimentum nibh, ut fermentum massa justo sit amet risus.
                </p>
                <p>
                  <a className="btn btn-secondary" href="/" role="button">
                    {strings.home_view} &raquo;
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Jumbotron>
      </Container>
    );
  }
}
