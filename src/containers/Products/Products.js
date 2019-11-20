import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import Product from "../../components/Product/Product";
import classes from "./Products.css";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import Axios from "axios";
import { Redirect, withRouter } from "react-router-dom";

class Products extends Component {
  state = {};

  componentDidMount() {
    this.props.onFetchProducts();
  }

  showProductHandler = id => {
    this.props.onShowProduct(id);
  };

  render() {
    let redirectTo = null;

    if (this.props.productInfo) {
      redirectTo = <Redirect to="/productpage" />;
    }

    let products = (
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
    products: state.products.products,
    productInfo: state.products.productInfo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchProducts: () => dispatch(actions.fetchProducts()),
    onShowProduct: id => dispatch(actions.showProduct(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(withErrorHandler(Products, Axios)));
