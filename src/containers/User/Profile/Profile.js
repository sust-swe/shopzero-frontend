import React, { Component } from "react";
import classes from "./Profile.css";
import { MDBRow, MDBCol } from "mdbreact";
import Logo from "../../../components/Logo/Logo";
import ShowMenu from "../../ShowMenu/ShowMenu";

const Profile = () => {
  return (
    <div>
      <div className={classes.Profile}>
        <Logo />
      </div>
      <MDBRow>
        <MDBCol md="2">
          <ShowMenu />
        </MDBCol>
        <MDBCol className={classes.Profile} md="8">
          <h1>Profile Page</h1>
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default Profile;
