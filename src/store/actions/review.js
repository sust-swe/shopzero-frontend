import * as actionTypes from "./actionTypes";

export const createReview = (product_id, body, title, rating) => {
  return dispatch => {};
};

export const createReviewSuccess = review => {
  return {
    type: actionTypes.CREATE_REVIEW_SUCCESS
  };
};

export const createReviewFail = error => {
  return {
    type: actionTypes.CREATE_REVIEW_FAIL,
    error: error
  };
};

export const canCreateReview = () => {
  return dispatch => {};
};

export const canCreateReviewSuccess = info => {
  return {
    type: actionTypes.CAN_CREATE_REVIEW_SUCCESS,
    info: info
  };
};

export const canCreateReviewFail = error => {
  return {
    type: actionTypes.CAN_CREATE_REVIEW_FAIL,
    error: error
  };
};

export const deleteReviews = () => {
  return {
    type: actionTypes.DELETE_REVIEWS
  };
};

export const deleteReview = reviewId => {
  return dispatch => {};
};

export const deleteReviewSuccess = info => {
  return {
    type: actionTypes.DELETE_REVIEW_SUCCESS,
    info: info
  };
};

export const deleteReviewFail = error => {
  return {
    type: actionTypes.DELETE_REVIEW_FAIL,
    error: error
  };
};

export const fetchReviews = product_id => {
  return dispatch => {};
};

export const fetchReviewsSuccess = reviews => {
  return {
    type: actionTypes.FETCH_REVIEWS_SUCCESS,
    reviews: reviews
  };
};

export const fetchReviewsFail = error => {
  return {
    type: actionTypes.FETCH_REVIEWS_FAIL,
    error: error
  };
};
