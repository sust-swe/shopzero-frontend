import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";
import { Redirect } from "react-router-dom";

class Logout extends Component {
  state = {};

  componentDidMount() {
    this.props.onLogout();
    this.props.onDeleteCart();
    this.props.onDeleteOrders();
  }

  render() {
    return <Redirect to="/" />;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => dispatch(actions.logout()),
    onDeleteCart: () => dispatch(actions.deleteCart()),
    onDeleteOrders: () => dispatch(actions.deleteOrders())
  };
};

export default connect(null, mapDispatchToProps)(Logout);
