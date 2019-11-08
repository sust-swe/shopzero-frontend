import React, { Component } from "react";
import { connect } from "react-redux";
import classes from "./Home.css";
import Logo from "../../components/Logo/Logo";
import SearchBar from "./SearchBar/SearchBar";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

class Home extends Component {
  state = {};

  render() {
    return (
      <MDBContainer className={classes.Home}>
        {this.props.isAuthenticated ? <h1>Signed In</h1> : <h1>Signed Out</h1>}
        <MDBRow>
          <MDBCol>
            <Logo className={classes.Logo} />
          </MDBCol>
          <MDBCol>
            <SearchBar className={classes.SearchBar} />
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol md="4">Menu</MDBCol>
          <MDBCol md="4">Products</MDBCol>
          <MDBCol md="4">Sign Up / Ad</MDBCol>
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
