import React from "react";
import Logo from "../Logo/Logo";
import classes from "./Help.css";
import { MDBRow, MDBCol } from "mdbreact";

const Help = () => {
  return (
    <div>
      <div className={classes.Help}>
        <Logo />
        <h1>Help Page</h1>
      </div>
    </div>
  );
};

export default Help;
