import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  products: [],
  error: null
};

const fetchProductsSuccess = (state, action) => {
  return updateObject(state, { products: action.products });
};

const fetchProductsFail = (state, action) => {
  return updateObject(state, { error: action.error });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCTS_SUCCESS:
      return fetchProductsSuccess(state, action);

    case actionTypes.FETCH_PRODUCTS_FAIL:
      return fetchProductsFail(state, action);

    default:
      return state;
  }
};

export default reducer;
