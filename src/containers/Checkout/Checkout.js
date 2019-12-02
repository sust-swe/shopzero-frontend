import React, { Component } from "react";
import classes from "./Checkout.css";

class Checkout extends Component {
  state = {
    controls: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Full Name"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      address: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Address"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      phoneNo: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Phone no"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "email"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      }
    }
  };
  render() {
    return (
      <div className={classes.Row}>
        <h1>hi</h1>
        <h1>hello</h1>
      </div>
    );
  }
}

export default Checkout;
