import React from "react";
import classes from "./Product.css";

const Product = props => {
  return (
    <div className={classes.Product} onClick={props.clicked}>
      <span>
        <img
          className={classes.Image}
          src={"http://localhost:5000" + props.picture}
          alt={props.picture}
        ></img>
      </span>
      <p className={classes.Title}>{props.name}</p>
      <p className={classes.Price}>{"$" + props.price}</p>
    </div>
  );
};

export default Product;
