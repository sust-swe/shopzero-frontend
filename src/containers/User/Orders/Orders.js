import React, { Component } from "react";
import Order from "../../../components/Order/Order";
import * as actions from "../../../store/actions/index";
import { connect } from "react-redux";
import Spinner from "../../../components/UI/Spinner/Spinner";

class Orders extends Component {
  state = {};

  componentDidMount() {
    this.props.onFetchOrders();
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
    orders: state.order.orders
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchOrders: () => dispatch(actions.fetchOrders())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
