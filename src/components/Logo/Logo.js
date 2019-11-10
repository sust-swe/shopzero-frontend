import React, { Component } from "react";
import classes from "./Logo.css";
import { withRouter } from "react-router-dom";
class Logo extends Component {
  state = {};

  clickHandler = event => {
    this.props.history.push("/");
  };

  render() {
    return (
      <div className={classes.Logo} onClick={this.clickHandler}>
        <h1>ShopZero</h1>
      </div>
    );
  }
}

export default withRouter(Logo);
