import React from "react";
import classes from "./CartPage.css";
import { MDBRow, MDBCol } from "mdbreact";
import CartItems from "../CartItems/CartItems";
import CartSummary from "../CartSummary/CartSummary";

const CartPage = () => {
  return (
    <div className={classes.CartPage}>
      <MDBRow>
        <MDBCol md="8">
          <CartItems />
        </MDBCol>
        <MDBCol md="4">
          <CartSummary />
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default CartPage;
