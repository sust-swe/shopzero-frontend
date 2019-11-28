import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  cart: null,
  cartSize: null,
  products: [],
  error: null
};

const saveCart = (state, action) => {
  return updateObject(state, {
    cart: action.cart,
    cartSize: action.cart.length
  });
};

const saveCartProductSuccess = (state, action) => {
  return updateObject(state, {
    products: state.products.concat(action.product)
  });
};

const saveCartProductFail = (state, action) => {
  return updateObject(state, { error: action.error });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SAVE_CART:
      return saveCart(state, action);

    case actionTypes.SAVE_CART_PRODUCT_SUCCESS:
      return saveCartProductSuccess(state, action);

    case actionTypes.SAVE_CART_PRODUCT_FAIL:
      return saveCartProductFail(state, action);

    default:
      return state;
  }
};

export default reducer;
