import * as actionTypes from "./actionTypes";
import Axios from "axios";

export const placeOrder = address => {
  return dispatch => {
    Axios.post("orders/create", address)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const fetchOrders = () => {
  return dispatch => {
    Axios.get("orders/orders")
      .then(response => {
        console.log(response.data);
        dispatch(fetchOrdersSuccess(response.data));
      })
      .catch(error => {
        console.log(error);
        dispatch(fetchOrdersFail(error));
      });
  };
};

export const fetchOrdersSuccess = orders => {
  return {
    type: actionTypes.FETCH_ORDERS_SUCCESS,
    orders: orders
  };
};

export const fetchOrdersFail = error => {
  return {
    type: actionTypes.FETCH_ORDERS_FAIL,
    error: error
  };
};

export const deleteOrders = () => {
  return {
    type: actionTypes.DELETE_ORDERS
  };
};
