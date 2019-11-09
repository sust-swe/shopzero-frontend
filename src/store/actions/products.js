import * as actionTypes from "./actionTypes";
import Axios from "axios";

export const fetchProducts = () => {
  return dispatch => {
    let fetchedProducts = [];

    Axios.get("products/index")
      .then(response => {
        console.log(response);

        for (let key in response.data) {
          fetchedProducts.push({ ...response.data[key] });
        }

        dispatch(fetchProductsSuccess(fetchedProducts));
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const fetchProductsSuccess = products => {
  return {
    type: actionTypes.FETCH_PRODUCTS_SUCCESS,
    products: products
  };
};

export const fetchProductsFail = error => {
  return {
    type: actionTypes.FETCH_PRODUCTS_FAIL,
    error: error
  };
};