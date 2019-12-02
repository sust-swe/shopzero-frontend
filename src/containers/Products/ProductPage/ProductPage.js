import React, { Component } from "react";
import { MDBCol } from "mdbreact";
import classes from "./ProductPage.css";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";
import { Redirect } from "react-router-dom";
class ProductPage extends Component {
  state = {
    productName: null,
    productPrice: null,
    productCategory: null,
    productBrand: null,
    productDescription: null,
    productFeatures: null,
    productImage: null,
    productStock: null,
    productId: null,
    quantity: 1
  };

  constructor(props) {
    super(props);
    if (props.productInfo) {
      this.state = {
        productId: props.productInfo.id,
        productName: props.productInfo.name,
        productPrice: props.productInfo.sales_price,
        productCategory: props.productInfo.category.name,
        productBrand: props.productInfo.brand.name,
        productDescription: props.productInfo.description,
        productFeatures: props.productInfo.features,
        productImage: props.productInfo.picture.url,
        productStock: props.productInfo.stock,
        quantity: 1
      };
    }
  }

  componentDidMount() {
    console.log(this.state.info);
    this.props.onSetProductInfoToNull();
  }

  addToCartHandler = event => {
    event.preventDefault();
    this.props.onAddToCart(this.state.productId, this.state.quantity);
  };

  increaseQuantityHandler = event => {
    event.preventDefault();
    this.setState({ quantity: this.state.quantity + 1 });
  };

  decreaseQuantityHandler = event => {
    event.preventDefault();
    this.setState({ quantity: this.state.quantity - 1 });
  };

  render() {
    let page = null;

    if (this.state.productName) {
      page = (
        <div className={classes.body}>
          <div className={[classes.Row, `row`].join(" ")}>
            <MDBCol md="12" className={classes.Product}>
              <div className={[classes.Row, "row"].join(" ")}>
                <div className={["col-md-6", classes.evenlySpaced].join(" ")}>
                  <div className={classes.Img}>
                    <img
                      className={classes.Img}
                      src={"http://localhost:5000" + this.state.productImage}
                    ></img>
                  </div>
                </div>
                <div className={["col-md-6"].join(" ")}>
                  <div>
                    <h3>{this.state.productName}</h3>
                  </div>
                  <div>
                    <h3>{this.state.productBrand}</h3>
                  </div>
                  <div>
                    <h3>${this.state.productPrice}</h3>
                  </div>
                  <div>
                    <div className={classes.row}>
                      <button
                        className={classes.Button}
                        onClick={this.decreaseQuantityHandler}
                        disabled={this.state.quantity === 0}
                      >
                        -
                      </button>
                      <h6>Quantity: {this.state.quantity}</h6>
                      <button
                        className={classes.Button}
                        onClick={this.increaseQuantityHandler}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div>
                    <button
                      className="btn btn-success"
                      onClick={this.addToCartHandler}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div className={["col-md-12"].join(" ")}>
                  <div className={["col-md-6", classes.evenlySpaced].join(" ")}>
                    <h4>Features</h4>
                  </div>
                </div>
                <div className={["col-md-12", classes.flexStart].join(" ")}>
                  <div className={["col-md-6", classes.evenlySpaced].join(" ")}>
                    <h4>description</h4>
                  </div>
                </div>
              </div>

              <MDBCol md="2"></MDBCol>
            </MDBCol>
          </div>
        </div>
      );
    }

    let redirectTo = null;

    if (!page) {
      redirectTo = <Redirect to="/" />;
    }

    return (
      <div>
        {redirectTo}
        {page}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    productInfo: state.products.productInfo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSetProductInfoToNull: () => dispatch(actions.setProductInfoToNull()),
    onAddToCart: (id, quantity) => dispatch(actions.addToCart(id, quantity))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
