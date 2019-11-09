import React from "react";
import classes from "./Product.css";

const Product = props => {
  return (
    <div className={classes.Product} onClick={props.clicked}>
      <span className={classes.Image}>Image</span>
      <p className={classes.Title}>{props.name}</p>
      <p className={classes.Price}>{"$" + props.price}</p>
    </div>
  );
};

export default Product;
