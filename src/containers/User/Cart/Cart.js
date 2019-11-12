import React, { Component } from "react";
import CartLogo from "../../../assets/images/shopping-cart.png";
import classes from "./Cart.css";

class Cart extends Component {
  state = {};
  render() {
    return (
      <div className={[classes.Row, `row`].join(" ")}>
        <img src={CartLogo} alt="MyCart" />
        <p>1</p>
      </div>
    );
  }
}

export default Cart;
