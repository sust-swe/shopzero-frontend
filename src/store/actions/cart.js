import * as actionTypes from "./actionTypes";
import Axios from "axios";

export const saveCart = cart => {
  return {
    type: actionTypes.SAVE_CART,
    cart: cart
  };
};

export const saveCartProductSuccess = product => {
  return {
    type: actionTypes.SAVE_CART_PRODUCT_SUCCESS,
    product: product
  };
};

export const saveCartProductFail = error => {
  return {
    type: actionTypes.SAVE_CART_PRODUCT_FAIL,
    error: error
  };
};

export const fetchCartProduct = id => {
  return dispatch => {
    Axios.get("products/" + id + "/show")
      .then(response => {
        dispatch(saveCartProductSuccess(response.data));
      })
      .catch(error => {
        dispatch(saveCartProductFail(error));
      });
  };
};

export const addToCart = (id, quantity) => {
  const product = {
    product_id: id,
    count: quantity,
    checked_at_checkout: true
  };

  return dispatch => {
    Axios.post("cart_items/create", product)
      .then(response => {
        console.log("created");
      })
      .catch(error => {
        console.log("error");
      });
  };
};

export const updateCart = (id, quantity) => {
  const product = {
    product_id: id,
    count: quantity,
    checked_at_checkout: true
  };

  return dispatch => {
    Axios.post("cart_items/update", product)
      .then(response => {
        console.log("updated");
      })
      .catch(error => {
        console.log("error");
      });
  };
};

export const deleteFromCart = id => {
  console.log(id);

  return dispatch => {
    Axios.delete("cart_items/delete", { data: { product_id: id } })
      .then(response => {
        console.log("deleted");
      })
      .catch(error => {
        console.log("error");
      });
  };
};
