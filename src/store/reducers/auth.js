import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  token: null,
  userId: null,
  error: false,
  loading: false,
  responseMessage: null,
  authRedirectPath: "/",
  signedUp: false,
  user: null
};

const authStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const authSuccess = (state, action) => {
  console.log("state check");
  console.log("success");
  return updateObject(state, {
    token: action.authData.auth_token,
    error: null,
    loading: false,
    signedUp: false,
    user: action.authData.user,
    userId: action.userId
  });
};

const authFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const logout = (state, action) => {
  return updateObject(state, {
    token: null,
    error: false,
    loading: false,
    user: null,
    userId: null
  });
};

const logoutFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const signupSuccess = (state, action) => {
  return updateObject(state, { signedUp: true, loading: false });
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

const authenticated = (state, action) => {
  return updateObject(state, {
    token: action.token,
    error: null,
    loading: false,
    user: action.user
  });
};

const updateUserSuccess = (state, action) => {
  return updateObject(state, { user: action.updateInfo, loading: false });
};

const updateUserFail = (state, action) => {
  return updateObject(state, { error: action.error });
};

const changePasswordFail = (state, action) => {
  return updateObject(state, { error: action.error });
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

    case actionTypes.AUTHENTICATED:
      return authenticated(state, action);

    case actionTypes.UPDATE_USER_SUCCESS:
      return updateUserSuccess(state, action);

    case actionTypes.UPDATE_USER_FAIL:
      return updateUserFail(state, action);

    case actionTypes.CHANGE_PASSWORD_FAIL:
      return changePasswordFail(state, action);

    default:
      return state;
  }
};

export default reducer;
