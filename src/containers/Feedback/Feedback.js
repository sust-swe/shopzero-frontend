import React, { Component } from "react";
import Logo from "../../components/Logo/Logo";
import classes from "./Feedback.css";

class Feedback extends Component {
  state = {};
  render() {
    return (
      <div className={classes.Feedback}>
        <Logo />
        <h1>Feedback Page</h1>
      </div>
    );
  }
}

export default Feedback;
