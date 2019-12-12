import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";
import { deleteReview, fetchReviews } from "../actions";

const initialState = {
  canReview: false,
  reviews: [],
  review: null,
  error: null
};

export const createReviewSuccess = (state, action) => {
  return updateObject(state, { review: action.review, canReview: true });
};

export const createReviewFail = (state, action) => {
  return updateObject(state, { error: error });
};

export const canCreateReviewSuccess = (state, action) => {
  return updateObject(state, {
    review: action.info.review,
    canReview: action.info.canReview
  });
};

export const canCreateReviewFail = (state, action) => {
  return updateObject(state, { error: error });
};

export const deleteReviews = (state, action) => {
  return updateObject(state, { reviews: null, review: null, canReview: false });
};

export const deleteReviewSuccess = (state, action) => {
  return updateObject(state, { review: null, canReview: true });
};

export const deleteReviewFail = (state, action) => {
  return updateObject(state, { error: error });
};

export const fetchReviewsSuccess = (state, action) => {
  return updateObject(state, { reviews: reviews });
};

export const fetchReviewsFail = (state, action) => {
  return updateObject(state, { error: error });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_REVIEW_SUCCESS:
      return createReviewSuccess(state, action);

    case actionTypes.CREATE_REVIEW_FAIL:
      return createReviewFail(state, action);

    case actionTypes.CAN_CREATE_REVIEW_SUCCESS:
      return canCreateReviewSuccess(state, action);

    case actionTypes.CAN_CREATE_REVIEW_FAIL:
      return canCreateReviewFail(state, action);

    case actionTypes.DELETE_REVIEWS:
      return deleteReviews(state, action);

    case actionTypes.DELETE_REVIEW_SUCCESS:
      return deleteReviewSuccess(state, action);

    case actionTypes.DELETE_REVIEW_FAIL:
      return deleteReviewFail(state, action);

    case actionTypes.FETCH_REVIEWS_SUCCESS:
      return fetchReviewsSuccess(state, action);

    case actionTypes.FETCH_REVIEWS_FAIL:
      return fetchReviewsFail(state, action);

    default:
      return state;
  }
};
