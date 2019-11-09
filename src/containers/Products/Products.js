import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../../store/actions/index";
import Product from "../../components/Product/Product";

class Products extends Component {
  state = {};

  componentDidMount() {
    this.props.onFetchProducts();
  }

  render() {
    let products = (
      <div>
        {this.props.products.map(product => (
          <Product
            key={product.id}
            name={product.name}
            price={product.sales_price}
          />
        ))}
      </div>
    );

    return products;
  }
}

const mapStateToProps = state => {
  return {
    products: state.products.products
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchProducts: () => dispatch(fetchProducts())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
