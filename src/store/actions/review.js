import * as actionTypes from "./actionTypes";
import Axios from "axios";
// product_id, body, title, rating

export const createReview = review => {
  return dispatch => {
    Axios.post("reviews/", review)
      .then(response => {
        console.log(response.data);
        dispatch(createReviewSuccess(response.data));
      })
      .catch(error => {
        dispatch(createReviewFail(error));
      });
  };
};

export const createReviewSuccess = info => {
  return {
    type: actionTypes.CREATE_REVIEW_SUCCESS,
    info: info
  };
};

export const createReviewFail = error => {
  return {
    type: actionTypes.CREATE_REVIEW_FAIL,
    error: error
  };
};

export const canCreateReview = product_id => {
  return dispatch => {
    Axios.get("reviews/new?product_id=" + product_id)
      .then(response => {
        console.log(response.data);
        dispatch(canCreateReviewSuccess(response.data));
      })
      .catch(error => {
        dispatch(canCreateReviewFail(error));
      });
  };
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

export const deleteReview = review_id => {
  return dispatch => {
    Axios.delete("reviews/" + review_id)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        dispatch(deleteReviewFail(error));
      });
  };
};

export const deleteReviewSuccess = () => {
  return {
    type: actionTypes.DELETE_REVIEW_SUCCESS
  };
};

export const deleteReviewFail = error => {
  return {
    type: actionTypes.DELETE_REVIEW_FAIL,
    error: error
  };
};

export const fetchReviews = product_id => {
  return dispatch => {
    Axios.get("reviews/" + product_id)
      .then(response => {
        console.log(response.data);
        dispatch(fetchReviewsSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchReviewsFail(error));
      });
  };
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
