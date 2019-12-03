import React, { Component } from "react";
import Order from "./Order/Order";
import * as actions from "../../../store/actions/index";
import { connect } from "react-redux";

class Orders extends Component {
  state = {};

  componentDidMount() {
    this.props.onFetchOrders();
  }

  render() {
    return (
      <div>
        <Order />
        <Order />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchOrders: () => dispatch(actions.fetchOrders())
  };
};

export default connect(null, mapDispatchToProps)(Orders);
