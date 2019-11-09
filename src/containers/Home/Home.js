import React, { Component } from "react";
import { connect } from "react-redux";
import classes from "./Home.css";
import Logo from "../../components/Logo/Logo";
import SearchBar from "./SearchBar/SearchBar";
import { MDBBtn, MDBRow, MDBCol } from "mdbreact";
import Menu from "../../components/Navigation/Menu/Menu";
import Products from "../Products/Products";
import Signup from "../Auth/Signup/Signup";
import ShowMenu from "../ShowMenu/ShowMenu";
import { Redirect } from "react-router-dom";

class Home extends Component {
  state = {};

  signupBtnHandler = event => {
    event.preventDefault();
    this.props.history.push("/signup");
  };

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
          <MDBCol md="8">
            <Products className={classes.Products} />
          </MDBCol>
          {!this.props.isAuthenticated ? (
            <MDBCol md="2">
              <MDBBtn outline color="success" onClick={this.signupBtnHandler}>
                SIGN UP
              </MDBBtn>
            </MDBCol>
          ) : null}
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

export default connect(mapStateToProps)(Home);
