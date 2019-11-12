import React, { Component } from "react";
import { connect } from "react-redux";
import classes from "./Home.css";
import { MDBBtn } from "mdbreact";
import Products from "../Products/Products";
class Home extends Component {
  state = {};

  signupBtnHandler = event => {
    event.preventDefault();
    this.props.history.push("/signup");
  };

  render() {
    return (
      <div>
        <div className={[classes.Row, `row`].join(" ")}>
          <div className={["col-md-10"].join(" ")}>
            <Products className={classes.Products} />
          </div>
          {!this.props.isAuthenticated ? (
            <div className={["col-md-2"].join(" ")}>
              <MDBBtn color="light-green" onClick={this.signupBtnHandler}>
                SIGN UP
              </MDBBtn>
            </div>
          ) : null}
        </div>
      </div>

      // <div>
      //   <div className={[classes.Row, `row`].join(" ")}>
      //     <div className="col-md-2">
      //       <Logo className={classes.Logo} />
      //     </div>
      //     <div className="col-md-8">
      //       <SearchBar className={classes.SearchBar} />
      //     </div>
      //   </div>

      //   <div className={[classes.Row, `row`].join(" ")}>
      //     <div className={["col-md-2"].join(" ")}>
      //       <ShowMenu />
      //     </div>
      //     <div className={["col-md-8"].join(" ")}>
      //       <Products className={classes.Products} />
      //     </div>
      //     {!this.props.isAuthenticated ? (
      //       <div className={["col-md-2"].join(" ")}>
      //         <MDBBtn color="light-green" onClick={this.signupBtnHandler}>
      //           SIGN UP
      //         </MDBBtn>
      //       </div>
      //     ) : null}
      //   </div>
      // </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

export default connect(mapStateToProps)(Home);
