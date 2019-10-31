import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  token: null,
  userId: null,
  error: false,
  loading: false,
  responseMessage: null
};

const authStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true,
    responseMessage: null
  });
};

const authSuccess = (state, action) => {
  return updateObject(state, {
    token: action.authData.auth_token,
    error: null,
    loading: false,
    responseMessage: action.authData.message
  });
};

const authFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
    responseMessage: null
  });
};

const logout = (state, action) => {
  return updateObject(state, {
    token: null,
    error: false,
    loading: false,
    responseMessage: null
  });
};

const logoutFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
    responseMessage: null
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return authStart(state, action);

    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);

    case actionTypes.AUTH_FAIL:
      return authFail(state, action);

    case actionTypes.LOGOUT:
      return logout(state, action);

    case actionTypes.LOGOUT_FAIL:
      return logoutFail(state, action);

    default:
      return state;
  }
};

export default reducer;
