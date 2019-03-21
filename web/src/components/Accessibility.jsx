import React from "react";
import Slider from "rc-slider";
import { Collapse } from "reactstrap";
import "rc-slider/assets/index.css";

export default class Accessibility extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAccessbilityToolbox: false,
      fontSize: 12
    };
  }
  handleBtnClick = e => {
    this.setState({
      showAccessbilityToolbox: !this.state.showAccessbilityToolbox
    });
  };
  onSliderChange = value => {
    console.log("slider value", value);
    this.setState({
      fontSize: value
    });
  };
  render() {
    const { showAccessbilityToolbox, fontSize } = this.state;
    return (
      <div className="place-bottom">
        <button
          type="button"
          className="btn btn-primary border-bottom-radius-0"
          onClick={this.handleBtnClick}
        >
          Accessibility
        </button>
        <Collapse isOpen={showAccessbilityToolbox}>
          <div className="accessbility-toolbox">
            <div className="p-3">
              <div className="row">
                <div className="col-sm-6">
                  <p>Font size: {fontSize}</p>
                  <Slider min={12} max={42} onChange={this.onSliderChange} />
                </div>
              </div>
            </div>
          </div>
        </Collapse>
      </div>
    );
  }
}
