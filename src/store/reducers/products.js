import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  products: [],
  error: null,
  productInfo: null
};

const fetchProductsSuccess = (state, action) => {
  return updateObject(state, {
    products: action.products,
    error: null,
    productInfo: null
  });
};

const fetchProductsFail = (state, action) => {
  return updateObject(state, { error: action.error });
};

const showProductSuccess = (state, action) => {
  return updateObject(state, { productInfo: action.productInfo, error: null });
};

const showProductFail = (state, action) => {
  return updateObject(state, { error: action.error });
};

const setProductInfoToNull = (state, action) => {
  return updateObject(state, { productInfo: null });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCTS_SUCCESS:
      return fetchProductsSuccess(state, action);

    case actionTypes.FETCH_PRODUCTS_FAIL:
      return fetchProductsFail(state, action);

    case actionTypes.SHOW_PRODUCT_SUCCESS:
      return showProductSuccess(state, action);

    case actionTypes.SHOW_PRODUCT_FAIL:
      return showProductFail(state, action);

    case actionTypes.SET_PRODUCT_INFO_TO_NULL:
      return setProductInfoToNull(state, action);

    default:
      return state;
  }
};

export default reducer;
