import * as actionTypes from "./actionTypes";
import Axios from "axios";

export const startOrdering = () => {
  return {
    type: actionTypes.START_ORDERING
  };
};

export const placeOrderSuccess = () => {
  return {
    type: actionTypes.PLACE_ORDER_SUCCESS
  };
};

export const placeOrderFail = error => {
  return {
    type: actionTypes.PLACE_ORDER_FAIL,
    error: error
  };
};

export const placeOrder = address => {
  return dispatch => {
    dispatch(startOrdering());

    Axios.post("orders/create", address)
      .then(response => {
        console.log(response.data);
        dispatch(placeOrderSuccess());
      })
      .catch(error => {
        console.log(error);
        dispatch(placeOrderFail(error));
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
