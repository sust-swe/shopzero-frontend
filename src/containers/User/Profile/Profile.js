import classes from "./Profile.css";
import { connect } from "react-redux";
import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";

class Profile extends Component {
  state = {};

  updateProfileHandler = event => {
    event.preventDefault();
    this.props.history.push("/updateprofile");
  };

  passwordChangeHandler = event => {
    event.preventDefault();
    this.props.history.push("/changePassword");
  };

  render() {
    return (
      <div className={classes.Profile}>
        <div>
          <h1>Profile Page</h1>
          <h3>
            <strong>Full Name:</strong> {this.props.user.firstname}{" "}
            {this.props.user.lastname}
          </h3>
          <h3>
            <strong>username:</strong> {this.props.user.username}
          </h3>
          <h3>
            <strong>email:</strong> {this.props.user.email}
          </h3>
          {this.props.user.phone_no ? (
            <h3>
              <strong>Phone No:</strong> {this.props.user.phone_no}
            </h3>
          ) : null}

          {this.props.user.house_no ? (
            <h3>
              <strong>House No:</strong> {this.props.user.house_no}
            </h3>
          ) : null}

          {this.props.user.road ? (
            <h3>
              <strong>Road:</strong> {this.props.user.road}
            </h3>
          ) : null}

          {this.props.user.area ? (
            <h3>
              <strong>Area:</strong> {this.props.user.area}
            </h3>
          ) : null}

          {this.props.user.city ? (
            <h3>
              <strong>City:</strong> {this.props.user.city}
            </h3>
          ) : null}

          {this.props.user.country ? (
            <h3>
              <strong>Country:</strong> {this.props.user.country}
            </h3>
          ) : null}
        </div>
        <div className={classes.Row}>
          <button
            onClick={this.updateProfileHandler}
            className={classes.Button}
          >
            Update Profile
          </button>
          <button
            onClick={this.passwordChangeHandler}
            className={classes.Button}
          >
            Change Password
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    isAuthenticated: state.auth.token !== null
  };
};

export default connect(mapStateToProps)(withRouter(Profile));
