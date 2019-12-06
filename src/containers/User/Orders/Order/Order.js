import React from "react";
import classes from "./Order.css";

const Order = props => {
  return (
    <div className={classes.Row}>
      <div className={classes.Order}>
        <div className={classes.Row}>
          <img
            className={classes.Image}
            src={"http://localhost:5000" + props.picture}
            alt={props.picture}
          />
          <div>
            <p className={classes.Title}>{props.name}</p>
            <em>by</em>
            <p className={classes.Brand}>{props.brand}</p>
          </div>
          <div>
            <div className={classes.Price}>
              Price: <p> {"$" + (props.price * props.quantity).toFixed(2)} </p>
            </div>

            <div className={classes.Quantity}>
              <p>Quantity: {props.quantity}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
