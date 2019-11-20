import React, { Component } from "react";
import CartLogo from "../../../assets/images/shopping-cart.png";
import classes from "./Cart.css";
import { withRouter } from "react-router-dom";

class Cart extends Component {
  state = {};

  clickHandler = event => {
    this.props.history.push("/cartpage");
  };

  render() {
    return (
      <div
        className={[classes.Row, `row`].join(" ")}
        onClick={this.clickHandler}
      >
        <img src={CartLogo} alt="MyCart" />
        <p>1</p>
      </div>
    );
  }
}

export default withRouter(Cart);
