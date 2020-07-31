import React, { Component } from "react";
import Display from "../design/Display";
import Settings from "../design/Settings";
import "./../../css/dashboard.css";

class Dashboard extends Component {
  state = {
    tshirtColor: "black",
    upperText: "This is upper text",
    lowerText: "This is lower text",
    mameImg: "",
    textSize: 22,
    textColor: "white",
  };
  handleTshirtColor = (e) => {
    this.setState({ tshirtColor: e.target.id });
  };
  handleUpperText = (e) => {
    this.setState({ upperText: e.target.value });
  };
  handleLowerText = (e) => {
    this.setState({ lowerText: e.target.value });
  };
  handleTextSize = (e) => {
    this.setState({ textSize: e.target.value });
  };
  formatText() {
    const size = this.state.textSize;
    return parseInt(size);
  }
  handleTextColor = (e) => {
    this.setState({ textColor: e.target.value });
  };
  render() {
    return (
      <div className="dashboard">
        <div className="dashboardDisplay">
          <Display display={this.state} textFormat={this.formatText()} />
        </div>
        <div className="dashboardSettings">
          <Settings
            color={this.handleTshirtColor}
            upperText={this.handleUpperText}
            lowerText={this.handleLowerText}
            textSize={this.handleTextSize}
            textColor={this.handleTextColor}
          />
        </div>
      </div>
    );
  }
}

export default Dashboard;
