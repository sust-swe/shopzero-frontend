import React, { Component } from "react";
import classes from "./SignupVerification.css";
import Logo from "../../../../components/Logo/Logo";

class SignupVerification extends Component {
  signinBtnHandler = event => {
    event.preventDefault();
    this.props.history.push("/signin");
  };

  render() {
    return (
      <div className={classes.Logo}>
        <Logo />
        <div className={classes.SignupVerification}>
          <h3>A verification email was sent to you.</h3>
          <h3>Please verify it and then try to sign in.</h3>
          <button
            className={classes.VerificationBtn}
            onClick={this.signinBtnHandler}
          >
            SIGN IN
          </button>
        </div>
      </div>
    );
  }
}

export default SignupVerification;
