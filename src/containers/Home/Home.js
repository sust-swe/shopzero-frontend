import React, { Component } from "react";
import { connect } from "react-redux";
import classes from "./Home.css";
import Logo from "../../components/Logo/Logo";
import SearchBar from "./SearchBar/SearchBar";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Menu from "../../components/Navigation/Menu/Menu";
import Products from "../Products/Products";
import Signup from "../Auth/Signup/Signup";
import ShowMenu from "../ShowMenu/ShowMenu";

class Home extends Component {
  state = {};

  render() {
    return (
      <MDBContainer className={classes.Home}>
        <MDBRow>
          <MDBCol md="4">
            <Logo className={classes.Logo} />
          </MDBCol>
          <MDBCol md="8">
            <SearchBar className={classes.SearchBar} />
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol md="4">
            <ShowMenu />
          </MDBCol>
          <MDBCol md="4">
            <Products className={classes.Products} />
          </MDBCol>
          <MDBCol md="4">
            <Signup className={classes.Signup} />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null
  };
};

export default connect(mapStateToProps)(Home);
