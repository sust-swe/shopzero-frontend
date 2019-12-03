import * as actionTypes from "./actionTypes";
import Axios from "axios";
import Cookies from "js-cookie";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = (authData, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    authData: authData,
    userId: userId
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
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("userId", response.data.user.id);
        Cookies.set("token", response.data.auth_token);
        dispatch(authSuccess(response.data, response.data.user.id));
        console.log(response.data.user);
      })
      .catch(error => {
        dispatch(authFail(error));
      });
  };
};

export const authenticated = (token, user) => {
  console.log("authenticated");
  return {
    type: actionTypes.AUTHENTICATED,
    token: token,
    user: JSON.parse(user)
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
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("userId");
    Cookies.remove("token");

    dispatch(logoutSuccess());
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
    const user = localStorage.getItem("user");

    if (token) {
      console.log("success");
      dispatch(authenticated(token, user));
      return true;
    } else {
      dispatch(logout());
      return false;
    }
  };
};

export const signup = signupInfo => {
  return dispatch => {
    Axios.post("users/signup", signupInfo)
      .then(response => {
        console.log(response);
        dispatch(signupSuccess());
      })
      .catch(error => {
        dispatch(signupFailed(error));
      });
  };
};

export const signupSuccess = () => {
  return {
    type: actionTypes.SIGNUP_SUCCESS
  };
};

export const signupFailed = error => {
  return {
    type: actionTypes.SIGNUP_FAILED,
    error: error
  };
};

export const updateUserSuccess = updateInfo => {
  return {
    type: actionTypes.UPDATE_USER_SUCCESS,
    updateInfo: updateInfo
  };
};

export const updateUserFail = error => {
  return {
    type: actionTypes.UPDATE_USER_FAIL,
    error: error
  };
};

export const updateUser = (username, updateInfo) => {
  return dispatch => {
    Axios.post("users/" + username + "/update", updateInfo)
      .then(response => {
        localStorage.removeItem("user");
        localStorage.setItem("user", JSON.stringify(response.data));
        dispatch(updateUserSuccess(response.data));
      })
      .catch(error => {
        dispatch(updateUserFail(error));
      });
  };
};
