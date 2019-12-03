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
          <div className={classes.Row}>
            <img
              className={classes.Image}
              src={"http://localhost:5000" + this.props.image}
            />
            <div>
              <p className={classes.Title}>{this.props.name}</p>
              <em>by</em>
              <p className={classes.Brand}>Brand</p>
            </div>
            <div>
              <div className={classes.Price}>
                Price:{" "}
                <p>
                  {" "}
                  {"$" +
                    (this.props.price * this.props.quantity).toFixed(2)}{" "}
                </p>
              </div>

              <div className={classes.Quantity}>
                <p>Quantity</p>
                <div className={classes.Row}>
                  <button className={classes.AddRemoveBtn}>-</button>
                  <p className={classes.AddRemoveNumber}>
                    {this.props.quantity}
                  </p>
                  <button className={classes.AddRemoveBtn}>+</button>
                </div>
              </div>
            </div>
            <div className={classes.Row}>
              <button
                className={classes.Remove}
                onClick={this.deleteFromCartHandler}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
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
