import React, { Component } from "react";
import classes from "./Cart.css";
import { MDBRow, MDBCol } from "mdbreact";
import Logo from "../../../components/Logo/Logo";
import ShowMenu from "../../ShowMenu/ShowMenu";

const Cart = () => {
  return (
    <div>
      <div className={classes.Cart}>
        <Logo />
      </div>
      <MDBRow>
        <MDBCol md="2">
          <ShowMenu />
        </MDBCol>
        <MDBCol className={classes.Cart} md="8">
          <h1>Cart Page</h1>
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default Cart;
