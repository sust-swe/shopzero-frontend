import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  products: [],
  error: null,
  productName: null,
  productCategory: null,
  productBrand: null,
  productStock: null,
  productPrice: null,
  productFeatures: null,
  productDescription: null,
  productImage: null,
  searchedProducts: [],
  brands: [],
  categories: []
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
    productName: action.productInfo.name,
    productPrice: action.productInfo.sales_price,
    productCategory: action.productInfo.category,
    productBrand: action.productInfo.brand.name,
    productDescription: action.productInfo.description,
    productFeatures: action.productInfo.features,
    productImage: action.productInfo.picture.url,
    productStock: action.productInfo.stock,
    error: null
  });
};

const showProductFail = (state, action) => {
  return updateObject(state, { error: action.error });
};

const setProductInfoToNull = (state, action) => {
  return updateObject(state, {
    productName: null,
    productPrice: null,
    productCategory: null,
    productBrand: null,
    productDescription: null,
    productFeatures: null,
    productImage: null,
    productStock: null
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

    default:
      return state;
  }
};

export default reducer;
