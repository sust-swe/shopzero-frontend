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
      })
      .catch(error => {
        console.log(error);
      });
  };
};
