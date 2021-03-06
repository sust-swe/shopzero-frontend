import * as actionTypes from "./actionTypes";
import Axios from "axios";

export const fetchProducts = () => {
  return dispatch => {
    let fetchedProducts = [];

    Axios.get("products/index")
      .then(response => {
        for (let key in response.data) {
          fetchedProducts.push({ ...response.data[key] });
        }
        dispatch(fetchProductsSuccess(fetchedProducts));
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const fetchProductsSuccess = products => {
  return {
    type: actionTypes.FETCH_PRODUCTS_SUCCESS,
    products: products
  };
};

export const fetchProductsFail = error => {
  return {
    type: actionTypes.FETCH_PRODUCTS_FAIL,
    error: error
  };
};

export const showProduct = id => {
  return dispatch => {
    Axios.get("products/" + id + "/show")
      .then(response => {
        dispatch(showProductSuccess(response.data));
      })
      .catch(error => {
        dispatch(showProductFail(error));
      });
  };
};

export const showProductSuccess = productInfo => {
  return {
    type: actionTypes.SHOW_PRODUCT_SUCCESS,
    productInfo: productInfo
  };
};

export const showProductFail = error => {
  return {
    type: actionTypes.SHOW_PRODUCT_FAIL,
    error: error
  };
};

export const setProductInfoToNull = () => {
  return {
    type: actionTypes.SET_PRODUCT_INFO_TO_NULL
  };
};

export const fetchSearchedProducts = (name, category, brand) => {
  let filterBrand = encodeURIComponent(brand);
  let filterCategory = encodeURIComponent(category);
  let filterName = encodeURIComponent(name);
  if (filterBrand === "none") {
    filterBrand = "";
  }
  if (filterCategory === "none") {
    filterCategory = "";
  }

  return dispatch => {
    let fetchedSearchedProducts = [];

    if (!filterBrand && !filterCategory) {
      Axios.get("products/search?name=" + filterName)
        .then(response => {
          console.log(response);

          for (let key in response.data) {
            fetchedSearchedProducts.push({ ...response.data[key] });
          }

          dispatch(fetchSearchedProductsSuccess(fetchedSearchedProducts));
        })
        .catch(error => {
          dispatch(fetchSearchedProductsFail(error));
        });
    } else if (!filterBrand && filterCategory) {
      Axios.get(
        "products/search?name=" + filterName + "&category=" + filterCategory
      )
        .then(response => {
          console.log(response);

          for (let key in response.data) {
            fetchedSearchedProducts.push({ ...response.data[key] });
          }

          dispatch(fetchSearchedProductsSuccess(fetchedSearchedProducts));
        })
        .catch(error => {
          dispatch(fetchSearchedProductsFail(error));
        });
    } else if (filterBrand && !filterCategory) {
      Axios.get("products/search?name=" + filterName + "&brand=" + filterBrand)
        .then(response => {
          console.log(response);

          for (let key in response.data) {
            fetchedSearchedProducts.push({ ...response.data[key] });
          }

          dispatch(fetchSearchedProductsSuccess(fetchedSearchedProducts));
        })
        .catch(error => {
          dispatch(fetchSearchedProductsFail(error));
        });
    } else {
      Axios.get(
        "products/search?name=" +
          filterName +
          "&category=" +
          filterCategory +
          "&brand=" +
          filterBrand
      )
        .then(response => {
          console.log(response);

          for (let key in response.data) {
            fetchedSearchedProducts.push({ ...response.data[key] });
          }

          dispatch(fetchSearchedProductsSuccess(fetchedSearchedProducts));
        })
        .catch(error => {
          dispatch(fetchSearchedProductsFail(error));
        });
    }
  };
};

export const fetchSearchedProductsSuccess = searchedProducts => {
  return {
    type: actionTypes.FETCH_SEARCHED_PRODUCTS_SUCCESS,
    searchedProducts: searchedProducts
  };
};

export const fetchSearchedProductsFail = error => {
  return {
    type: actionTypes.FETCH_SEARCHED_PRODUCTS_FAIL,
    error: error
  };
};

export const fetchBrands = () => {
  return dispatch => {
    let fetchedBrands = [{ name: "none" }];

    Axios.get("brands")
      .then(response => {
        for (let key in response.data) {
          fetchedBrands.push({ ...response.data[key] });
        }

        dispatch(fetchBrandsSuccess(fetchedBrands));
      })
      .catch(error => dispatch(fetchBrandsFail(error)));
  };
};

export const fetchBrandsSuccess = brands => {
  return {
    type: actionTypes.FETCH_BRANDS_SUCCESS,
    brands: brands
  };
};

export const fetchBrandsFail = error => {
  return {
    type: actionTypes.FETCH_BRANDS_FAIL,
    error: error
  };
};

export const fetchCategories = () => {
  return dispatch => {
    let fetchedCategories = [{ name: "none" }];

    Axios.get("categories")
      .then(response => {
        for (let key in response.data) {
          fetchedCategories.push({ ...response.data[key] });
        }

        dispatch(fetchCategoriesSuccess(fetchedCategories));
      })
      .catch(error => dispatch(fetchCategoriesFail(error)));
  };
};

export const fetchCategoriesSuccess = categories => {
  return {
    type: actionTypes.FETCH_CATEGORIES_SUCCESS,
    categories: categories
  };
};

export const fetchCategoriesFail = error => {
  return {
    type: actionTypes.FETCH_CATEGORIES_FAIL,
    error: error
  };
};
