import React, { Component } from "react";
import CartLogo from "../../../assets/images/shopping-cart.png";
import classes from "./Cart.css";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Cart extends Component {
  state = {};

  clickHandler = event => {
    this.props.history.push("/cartpage");
  };

  render() {
    return (
      <div className={classes.Row}>
        <div className={classes.item} onClick={this.clickHandler}>
          <img className={classes.icon} src={CartLogo} alt="MyCart" />
          <p className={classes.notify_badge}>{this.props.cartSize}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cartSize: state.cart.cartSize
  };
};

export default connect(mapStateToProps)(withRouter(Cart));
