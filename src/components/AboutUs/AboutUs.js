import React from "react";
import Logo from "../Logo/Logo";
import classes from "./AboutUs.css";
import { MDBRow, MDBCol } from "mdbreact";
import ShowMenu from "../../containers/ShowMenu/ShowMenu";

const AboutUs = () => {
  return (
    <div>
      <div className={classes.AboutUs}>
        <Logo />
      </div>
      <MDBRow>
        <MDBCol md="2">
          <ShowMenu />
        </MDBCol>
        <MDBCol className={classes.AboutUs} md="8">
          <h1>AboutUs Page</h1>
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default AboutUs;
