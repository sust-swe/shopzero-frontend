import React, { Component } from "react";
import CartItem from "./CartItem/CartItem";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class CartItems extends Component {
  render() {
    let cartItems = <Redirect to="/" />;

    if (this.props.cartItems) {
      cartItems = (
        <div>
          {this.props.cartItems.map(cartItem => (
            <CartItem
              key={cartItem.product.id}
              id={cartItem.product.id}
              name={cartItem.product.name}
              image={cartItem.product.picture.url}
              quantity={cartItem.count}
              price={cartItem.product.sales_price}
            />
          ))}
        </div>
      );
    }

    return cartItems;
  }
}

const mapStateToProps = state => {
  return {
    cartItems: state.cart.cart
  };
};

export default connect(mapStateToProps)(CartItems);
