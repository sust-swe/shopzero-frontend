import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  orders: [],
  error: null
};

const fetchOrders = (state, action) => {
  return updateObject(state, { orders: action.orders });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ORDERS:
      return fetchOrders(state, action);

    default:
      return state;
  }
};

export default reducer;
