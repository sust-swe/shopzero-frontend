import React, { Component } from "react";
import classes from "./CartSummary.css";

class CartSummary extends Component {
  state = {};
  render() {
    return (
      <div className={classes.CartSummary}>
        <div>
          <h1>Total</h1>
          <h3>Items:</h3>
          <h3>Price:</h3>
          <h3>Delivery Charge:</h3>
          <h3>VAT:</h3>
          <hr />
          <h3>TOTAL:</h3>
        </div>
        <p>Payment Method: Cash on Delivery</p>
      </div>
    );
  }
}

export default CartSummary;
