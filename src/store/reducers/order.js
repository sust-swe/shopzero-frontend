import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  orders: [],
  error: null
};

const fetchOrdersSuccess = (state, action) => {
  return updateObject(state, { orders: action.orders });
};

const fetchOrdersFail = (state, action) => {
  return updateObject(state, { error: action.error });
};

const deleteOrders = (state, action) => {
  return updateObject(state, { orders: [] });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ORDERS_SUCCESS:
      return fetchOrdersSuccess(state, action);

    case actionTypes.FETCH_ORDERS_FAIL:
      return fetchOrdersFail(state, action);

    case actionTypes.DELETE_ORDERS:
      return deleteOrders(state, action);

    default:
      return state;
  }
};

export default reducer;
