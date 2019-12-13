import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  cart: null,
  cartSize: 0,
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

const saveTotalCartPrice = (state, action) => {
  return updateObject(state, { totalPrice: action.totalPrice });
};

const deleteCart = (state, action) => {
  return updateObject(state, { cart: null, cartSize: 0 });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SAVE_CART:
      return saveCart(state, action);

    case actionTypes.SAVE_TOTAL_CART_PRICE:
      return saveTotalCartPrice(state, action);

    case actionTypes.DELETE_CART:
      return deleteCart(state, action);

    default:
      return state;
  }
};

export default reducer;
