import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";
import { deleteReview, fetchReviews } from "../actions";

const initialState = {
  canReview: false,
  reviews: [],
  review: null,
  error: null,
  totalRating: null,
  postSuccess: false,
  deleteSuccess: false
};

export const createReviewSuccess = (state, action) => {
  return updateObject(state, { review: action.info.review, canReview: true });
};

export const createReviewFail = (state, action) => {
  return updateObject(state, { error: action.error });
};

export const canCreateReviewSuccess = (state, action) => {
  return updateObject(state, {
    review: action.info.review,
    canReview: action.info.can_review
  });
};

export const canCreateReviewFail = (state, action) => {
  return updateObject(state, { error: action.error });
};

export const deleteReviews = (state, action) => {
  return updateObject(state, { review: null, canReview: false });
};

export const deleteReviewSuccess = (state, action) => {
  return updateObject(state, { review: null, canReview: true });
};

export const deleteReviewFail = (state, action) => {
  return updateObject(state, { error: action.error });
};

export const fetchReviewsSuccess = (state, action) => {
  return updateObject(state, {
    reviews: action.reviews.review,
    totalRating: action.reviews.total_rating
  });
};

export const fetchReviewsFail = (state, action) => {
  return updateObject(state, { error: action.error });
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

export default reducer;
