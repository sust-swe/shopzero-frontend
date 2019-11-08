import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";
import { Redirect } from "react-router-dom";

class Logout extends Component {
  state = {};

  componentDidMount() {
    this.props.onLogout();
  }

  render() {
    return <Redirect to="/signin" />;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => dispatch(actions.logout())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Logout);
