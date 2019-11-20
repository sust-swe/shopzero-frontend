import React from "react";
import classes from "./CartItem.css";

const CartItem = () => {
  return (
    <div className={classes.CartItem}>
      <div className={[classes.Row, `row`].join(" ")}>
        <h1>Cart Item</h1>
      </div>
    </div>
  );
};

export default CartItem;
