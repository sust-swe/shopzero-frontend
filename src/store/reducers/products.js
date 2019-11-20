import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  products: [],
  error: null,
  productInfo: null,
  searchedProducts: [],
  brands: [],
  categories: [],
  cartSize: null
};

const fetchProductsSuccess = (state, action) => {
  return updateObject(state, {
    products: action.products,
    error: null,
    productInfo: null
  });
};

const fetchProductsFail = (state, action) => {
  return updateObject(state, { error: action.error });
};

const showProductSuccess = (state, action) => {
  return updateObject(state, {
    productInfo: action.productInfo,
    error: null
  });
};

const showProductFail = (state, action) => {
  return updateObject(state, { error: action.error });
};

const setProductInfoToNull = (state, action) => {
  return updateObject(state, {
    productInfo: null
  });
};

const fetchSearchedProductsSuccess = (state, action) => {
  return updateObject(state, { searchedProducts: action.searchedProducts });
};

const fetchSearchedProductsFail = (state, action) => {
  return updateObject(state, { error: action.error });
};

const fetchBrandsSuccess = (state, action) => {
  return updateObject(state, { brands: action.brands });
};

const fetchBrandsFail = (state, action) => {
  return updateObject(state, { error: action.error });
};

const fetchCategoriesSuccess = (state, action) => {
  return updateObject(state, { categories: action.categories });
};

const fetchCategoriesFail = (state, action) => {
  return updateObject(state, { error: action.error });
};

const saveCartSize = (state, action) => {
  return updateObject(state, { cartSize: action.size });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCTS_SUCCESS:
      return fetchProductsSuccess(state, action);

    case actionTypes.FETCH_PRODUCTS_FAIL:
      return fetchProductsFail(state, action);

    case actionTypes.SHOW_PRODUCT_SUCCESS:
      return showProductSuccess(state, action);

    case actionTypes.SHOW_PRODUCT_FAIL:
      return showProductFail(state, action);

    case actionTypes.SET_PRODUCT_INFO_TO_NULL:
      return setProductInfoToNull(state, action);

    case actionTypes.FETCH_SEARCHED_PRODUCTS_SUCCESS:
      return fetchSearchedProductsSuccess(state, action);

    case actionTypes.FETCH_SEARCHED_PRODUCTS_FAIL:
      return fetchSearchedProductsFail(state, action);

    case actionTypes.FETCH_BRANDS_SUCCESS:
      return fetchBrandsSuccess(state, action);

    case actionTypes.FETCH_BRANDS_FAIL:
      return fetchBrandsFail(state, action);

    case actionTypes.FETCH_CATEGORIES_SUCCESS:
      return fetchCategoriesSuccess(state, action);

    case actionTypes.FETCH_CATEGORIES_FAIL:
      return fetchCategoriesFail(state, action);

    case actionTypes.SAVE_CART_SIZE:
      return saveCartSize(state, action);

    default:
      return state;
  }
};

export default reducer;
