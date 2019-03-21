import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

export default class Accessibility extends React.Component {
  render() {
    return (
      <div className="accessbility-toolbox" hidden>
        <Slider />
      </div>
    );
  }
}
