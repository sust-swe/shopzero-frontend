import React, { Component } from "react";
import classes from "./CartPage.css";
import { MDBRow, MDBCol } from "mdbreact";
import CartItems from "../CartItems/CartItems";
import CartSummary from "../CartSummary/CartSummary";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class CartPage extends Component {
  state = {};

  componentDidMount() {
    if (!this.props.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  render() {
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
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

export default connect(mapStateToProps)(withRouter(CartPage));
