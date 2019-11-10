import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  token: null,
  userId: null,
  error: false,
  loading: false,
  responseMessage: null,
  authRedirectPath: "/",
  signedUp: false
};

const authStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true,
    responseMessage: null,
    signedUp: false
  });
};

const authSuccess = (state, action) => {
  return updateObject(state, {
    token: action.authData.auth_token,
    error: null,
    loading: false,
    responseMessage: action.authData.message,
    signedUp: false
  });
};

const authFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
    responseMessage: "Invalid email or password",
    signedUp: false
  });
};

const logout = (state, action) => {
  return updateObject(state, {
    token: null,
    error: false,
    loading: false,
    responseMessage: null,
    signedUp: false
  });
};

const logoutFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
    responseMessage: null,
    signedUp: false
  });
};

const signupSuccess = (state, action) => {
  return updateObject(state, { signedUp: true });
};

const signupFailed = (state, action) => {
  return updateObject(state, { error: action.error, signedUp: false });
};

const setAuthRedirectPath = (state, action) => {
  return updateObject(state, {
    authRedirectPath: action.path,
    signedUp: false
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

    case actionTypes.SET_AUTH_REDIRECT_PATH:
      return setAuthRedirectPath(state, action);

    case actionTypes.SIGNUP_SUCCESS:
      return signupSuccess(state, action);

    case actionTypes.SIGNUP_FAILED:
      return signupFailed(state, action);

    default:
      return state;
  }
};

export default reducer;
