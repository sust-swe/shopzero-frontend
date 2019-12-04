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
    let totalprice = null;
    let priceclass = classes.price;
    if (this.props.location.pathname === "/cartpage") {
      priceclass = classes.hidden;
      totalprice = (
        <div>
          <p>
            <strong>Sub-Total:</strong>{" "}
            <em>{parseInt(this.props.totalPrice) + 40}</em>
          </p>
          <hr />
        </div>
      );
      button = (
        <a
          className={classes.button}
          disabled={this.props.cartSize === 0}
          onClick={this.checkoutOutHandler}
        >
          Checkout
        </a>
      );
    }

    return (
      <div>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <div className={classes.pricing_table}>
          <div className={classes.pricing_option}>
            <h1 className={classes.demo_title}>CartSummary</h1>
            <hr />
            <div className={classes.item_text}>
              <p>
                <strong>Items:</strong> <em>{this.props.cartSize}</em>
              </p>
              <p>
                <strong>Price:</strong> <em>{this.props.totalPrice}</em>
              </p>
              <p>
                <strong>Delivery Charge:</strong> <em>40$</em>
              </p>
              <hr />
              {totalprice}
              <p>
                <strong>Payment Method:</strong> Cash on Delivery
              </p>
            </div>
            <div className={classes.price}>
              <div className={classes.front}>
                <span className={classes.price}>
                  Total {parseInt(this.props.totalPrice) + 40} <b>$</b>
                </span>
              </div>
              <div className={classes.back}>{button}</div>
            </div>
          </div>
        </div>
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
