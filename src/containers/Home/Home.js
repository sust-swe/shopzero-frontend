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
      <div className={`Container Home`}>
        <MDBRow>
          <Logo className={classes.Logo} />
          <SearchBar className={classes.SearchBar} />
        </MDBRow>

        <MDBRow>
          <MDBCol md="2">
            <ShowMenu />
          </MDBCol>
          <MDBCol md="6">
            <Products className={classes.Products} />
          </MDBCol>
          <MDBCol md="2">
            <Signup className={classes.Signup} />
          </MDBCol>
        </MDBRow>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null
  };
};

export default connect(mapStateToProps)(Home);
