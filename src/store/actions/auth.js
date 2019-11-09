import * as actionTypes from "./actionTypes";
import Axios from "axios";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = authData => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    authData: authData
  };
};

export const authFail = error => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  };
};

export const auth = (email, password) => {
  return dispatch => {
    dispatch(authStart());

    const authData = {
      email: email,
      password: password,
      returnSecureToken: true
    };

    Axios.post("sessions/login", authData)
      .then(response => {
        console.log(response);
        localStorage.setItem("token", response.data.auth_token);
        dispatch(authSuccess(response.data));
      })
      .catch(error => {
        dispatch(authFail(error));
      });
  };
};

export const authenticated = () => {
  console.log("authenticated");
  return {
    type: actionTypes.AUTHENTICATED
  };
};

export const logoutSuccess = () => {
  return {
    type: actionTypes.LOGOUT
  };
};

export const logoutFail = error => {
  return {
    type: actionTypes.LOGOUT_FAIL,
    error: error
  };
};

export const logout = () => {
  return dispatch => {
    Axios.delete("sessions/logout")
      .then(response => {
        console.log(response);
        localStorage.removeItem("token");
        dispatch(logoutSuccess());
      })
      .catch(error => {
        dispatch(logoutFail(error));
      });
  };
};

export const setAuthRedirectPath = path => {
  return {
    type: actionTypes.SET_AUTH_REDIRECT_PATH,
    path: path
  };
};

export const authStateCheck = () => {
  return dispatch => {
    const token = localStorage.getItem("token");

    if (!token) {
      dispatch(logout());
    } else {
      dispatch(authSuccess(token));
    }
  };
};

export const signup = signupInfo => {
  return dispatch => {
    Axios.post("users/signup", signupInfo)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        dispatch(signupFailed(error));
      });
  };
};

export const signupFailed = error => {
  return {
    type: actionTypes.SIGNUP_FAILED,
    error: error
  };
};
