import React, { Component } from "react";
import Logo from "../../components/Logo/Logo";
import classes from "./Feedback.css";
import { MDBRow, MDBCol } from "mdbreact";
import ShowMenu from "../../containers/ShowMenu/ShowMenu";
class Feedback extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className={classes.Feedback}>
          <Logo />
        </div>
        <MDBRow>
          <MDBCol md="2">
            <ShowMenu />
          </MDBCol>
          <MDBCol className={classes.Feedback} md="8">
            <h1>Feedback Page</h1>
          </MDBCol>
        </MDBRow>
      </div>
    );
  }
}

export default Feedback;
