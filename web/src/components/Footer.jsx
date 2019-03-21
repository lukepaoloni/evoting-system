import React, { Component } from "react";
import Accessibility from "./Accessibility";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <Accessibility />
        <footer className="container">
          <p>&copy; E-Voting System 2019</p>
        </footer>
      </div>
    );
  }
}
