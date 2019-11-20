import React from "react";
import classes from "./CartPage.css";
import { MDBRow, MDBCol } from "mdbreact";
import CartItems from "../CartItems/CartItems";

const CartPage = () => {
  return (
    <div className={classes.CartPage}>
      <MDBRow>
        <MDBCol md="10">
          <CartItems />
        </MDBCol>
        <MDBCol md="2">
          <p>Total Price</p>
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default CartPage;

// const ingredientsOutput = (
//   <span>
//     <span className={classes.span}>Salad: ({props.salad})</span>
//     <span className={classes.span}>Bacon: ({props.bacon})</span>
//     <span className={classes.span}>Cheese: ({props.cheese})</span>
//     <span className={classes.span}>Meat: ({props.meat})</span>
//   </span>
// );

// return (
//   <div className={classes.Order}>
//     <p>Ingredients: {ingredientsOutput}</p>
//     <p>
//       Price: <strong>USD {props.price.toFixed(2)}</strong>
//     </p>
//   </div>
// );
