import React, { Component } from "react";
import classes from "./CartSummary.css";
import { connect } from "react-redux";
import * as actions from "../../../../store/actions/index";
import { withRouter } from "react-router-dom";

class CartSummary extends Component {
  state = {
    totalPrice: null
  };

  UNSAFE_componentWillMount() {
    let totalPrice = 0;

    if (this.props.cart) {
      this.props.cart.map(item => {
        totalPrice += item.count * item.product.sales_price;
      });
    }

    this.setState({ totalPrice: totalPrice.toFixed(2) });
  }

  checkoutOutHandler = event => {
    event.preventDefault();
    this.props.history.push("/checkout");
  };

  render() {
    let button = null;

    if (this.props.location.pathname === "/cartpage") {
      button = (
        <button
          disabled={this.props.cartSize === 0}
          onClick={this.checkoutOutHandler}
        >
          Checkout
        </button>
      );
    }

    return (
      <div className={classes.CartSummary}>
        <div>
          <h1>Total</h1>
          <h3>Items: {this.props.cartSize}</h3>
          <h3>Price: {this.props.totalPrice}</h3>
          <h3>Delivery Charge:</h3>
          <h3>VAT:</h3>
          <hr />
          <h3>TOTAL: {this.props.totalPrice}</h3>
        </div>
        <p>Payment Method: Cash on Delivery</p>
        {button}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cartSize: state.cart.cartSize,
    cart: state.cart.cart,
    totalPrice: state.cart.totalPrice,
    checkout: state.cart.checkout
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSaveTotalCartPrice: totalPrice =>
      dispatch(actions.saveTotalCartPrice(totalPrice))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CartSummary));
