import React from "react";
import classes from "./Product.css";

const Product = props => {
  return (
    <div className={classes.Product}>
      <span className={classes.Image}>Image</span>
      <p>{props.name}</p>
      <p>{props.price}</p>
    </div>
  );
};

export default Product;
