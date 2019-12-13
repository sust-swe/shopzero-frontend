import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  orders: [],
  error: null,
  loading: false
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

const startOrdering = (state, action) => {
  return updateObject(state, { loading: true });
};

const placeOrderSuccess = (state, action) => {
  return updateObject(state, { loading: false });
};

const placeOrderFail = (state, action) => {
  return updateObject(state, { error: action.error });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ORDERS_SUCCESS:
      return fetchOrdersSuccess(state, action);

    case actionTypes.FETCH_ORDERS_FAIL:
      return fetchOrdersFail(state, action);

    case actionTypes.DELETE_ORDERS:
      return deleteOrders(state, action);

    case actionTypes.START_ORDERING:
      return startOrdering(state, action);

    case actionTypes.PLACE_ORDER_SUCCESS:
      return placeOrderSuccess(state, action);

    case actionTypes.PLACE_ORDER_FAIL:
      return placeOrderFail(state, action);

    default:
      return state;
  }
};

export default reducer;
