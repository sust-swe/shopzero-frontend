import React, { Component } from "react";
import Product from "../../components/Product/Product";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import classes from "./SearchedProducts.css";

class SearchedProducts extends Component {
  state = {};

  showProductHandler = id => {
    console.log(id);
    this.props.onShowProduct(id);
  };

  render() {
    let redirectTo = null;

    if (this.props.productInfo) {
      redirectTo = <Redirect to="/productpage" />;
    }

    let products = (
      <div>
        <h1>No Matches Found</h1>
      </div>
    );

    if (this.props.products) {
      products = (
        <div className={[classes.center, "row"].join(" ")}>
          {this.props.products.map(product => (
            <Product
              key={product.id}
              name={product.name}
              price={product.sales_price}
              clicked={event => this.showProductHandler(product.id)}
            />
          ))}
        </div>
      );
    }

    return (
      <div>
        {redirectTo}
        {products}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products.searchedProducts,
    productInfo: state.products.productInfo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onShowProduct: id => dispatch(actions.showProduct(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchedProducts);
