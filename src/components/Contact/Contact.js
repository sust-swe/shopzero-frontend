import React from "react";
import Logo from "../Logo/Logo";
import classes from "./Contact.css";
import { MDBRow, MDBCol } from "mdbreact";
import ShowMenu from "../../containers/ShowMenu/ShowMenu";

const Contact = () => {
  return (
    <div>
      <div className={classes.Contact}>
        <Logo />
      </div>
      <MDBRow>
        <MDBCol md="2">
          <ShowMenu />
        </MDBCol>
        <MDBCol className={classes.Contact} md="8">
          <h1>Contact Page</h1>
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default Contact;
