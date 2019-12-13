import React, { Component } from "react";
import CartItem from "./CartItem/CartItem";
import { connect } from "react-redux";

class CartItems extends Component {
  render() {
    let cartItems = <p>There are no items in your cart</p>;

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
              brand={cartItem.product.brand.name}
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
    cartItems: state.cart.cart,
    cartSize: state.cart.cartSize
  };
};

export default connect(mapStateToProps)(CartItems);
