import React from "react";
import Logo from "../Logo/Logo";
import classes from "./Help.css";
import { MDBRow, MDBCol } from "mdbreact";
import ShowMenu from "../../containers/ShowMenu/ShowMenu";

const Help = () => {
  return (
    <div>
      <div className={classes.Help}>
        <Logo />
      </div>
      <MDBRow>
        <MDBCol md="2">
          <ShowMenu />
        </MDBCol>
        <MDBCol className={classes.Help}>
          <h1>Help Page</h1>
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default Help;
