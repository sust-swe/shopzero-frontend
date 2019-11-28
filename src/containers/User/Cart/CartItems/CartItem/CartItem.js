import classes from "./CartItem.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../../../store/actions/index";

class CartItem extends Component {
  state = {};

  deleteFromCartHandler = event => {
    event.preventDefault();
    this.props.onDeleteFromCart(this.props.id);
    console.log(this.props.id);
  };

  render() {
    return (
      <div className={classes.Row}>
        <div className={classes.CartItem}>
          <div className={[classes.Row, `row`].join(" ")}>
            <p>Image</p>
            <div>
              <p>Brand</p>
              <p>{this.props.name}</p>
              <p>Category</p>
            </div>
            <div>
              <p>{this.props.price * this.props.quantity}</p>
              <p>{this.props.quantity}</p>
            </div>
          </div>
        </div>
        <button onClick={this.deleteFromCartHandler}>Remove</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onDeleteFromCart: id => dispatch(actions.deleteFromCart(id))
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
