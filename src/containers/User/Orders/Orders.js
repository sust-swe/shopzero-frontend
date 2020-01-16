import React, { Component } from "react";
import Order from "../../../components/Order/Order";
import * as actions from "../../../store/actions/index";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Orders extends Component {
  state = {};

  componentDidMount() {
    if (this.props.isAuthenticated) {
      this.props.onFetchOrders();
    } else {
      this.props.history.push("/");
    }
  }

  render() {
    let orders = <p>There are no orders</p>;

    if (this.props.orders) {
      orders = (
        <div>
          {this.props.orders.map(order => (
            <Order
              key={order.id}
              name={order.product.name}
              brand={order.product.brand.name}
              price={order.price}
              quantity={order.count}
              picture={order.product.picture.url}
              status={order.delivered}
            />
          ))}
        </div>
      );
    }

    return <div>{orders}</div>;
  }
}

const mapStateToProps = state => {
  return {
    orders: state.order.orders,
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchOrders: () => dispatch(actions.fetchOrders())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Orders));
