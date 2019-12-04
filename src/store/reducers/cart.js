import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  cart: null,
  cartSize: null,
  products: [],
  error: null,
  totalPrice: null
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

const saveTotalCartPrice = (state, action) => {
  return updateObject(state, { totalPrice: action.totalPrice });
};

const deleteCart = (state, action) => {
  return updateObject(state, { cart: null, cartSize: null });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SAVE_CART:
      return saveCart(state, action);

    case actionTypes.SAVE_CART_PRODUCT_SUCCESS:
      return saveCartProductSuccess(state, action);

    case actionTypes.SAVE_CART_PRODUCT_FAIL:
      return saveCartProductFail(state, action);

    case actionTypes.SAVE_TOTAL_CART_PRICE:
      return saveTotalCartPrice(state, action);

    case actionTypes.DELETE_CART:
      return deleteCart(state, action);

    default:
      return state;
  }
};

export default reducer;
