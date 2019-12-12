import React, { Component } from "react";
import { MDBCol } from "mdbreact";
import classes from "./ProductPage.css";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";
import { Redirect, withRouter } from "react-router-dom";
import WriteReview from "../Reviews/WriteReview/WriteReview";

class ProductPage extends Component {
  state = {
    productName: null,
    productPrice: null,
    productCategory: null,
    productBrand: null,
    productDescription: null,
    productFeatures: [],
    productImage: null,
    productStock: null,
    productId: null,
    quantity: 1
  };

  constructor(props) {
    super(props);
    if (props.productInfo) {
      let features = props.productInfo.features.split(";");

      this.state = {
        productId: props.productInfo.id,
        productName: props.productInfo.name,
        productPrice: props.productInfo.sales_price,
        productCategory: props.productInfo.category.name,
        productBrand: props.productInfo.brand.name,
        productDescription: props.productInfo.description,
        productFeatures: features,
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

    if (this.props.authenticated) {
      this.props.onAddToCart(this.state.productId, this.state.quantity);
    } else {
      this.props.history.push("/signin");
    }
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
                      alt={this.props.productId}
                    ></img>
                  </div>
                </div>
                <div className={["col-md-6", classes.Controls].join(" ")}>
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
                        disabled={this.state.quantity === 1}
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
                      disabled={this.state.productStock < 1}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </MDBCol>
          </div>
          <div className={[classes.Row, "row"].join(" ")}>
            <MDBCol md="12" className={classes.Product}>
              <h1 className={classes.FeaturesHeading}>Features</h1>
              <div className={["col-md-6", classes.flexStart].join(" ")}>
                <div className={["col-md-6", classes.evenlySpaced].join(" ")}>
                  <ul>
                    {this.state.productFeatures.map(feature => {
                      return <li key={feature}>{feature}</li>;
                    })}
                  </ul>
                </div>
              </div>
              <h1 className={classes.DescriptionHeading}>
                Product Description
              </h1>
              <div className={["col-md-12", classes.flexStart].join(" ")}>
                <div className={["col-md-6", classes.evenlySpaced].join(" ")}>
                  <h4>{this.state.productDescription}</h4>
                </div>
                <WriteReview />
              </div>
            </MDBCol>
          </div>
          <h1 className={classes.DescriptionHeading}>Your review</h1>

          <h1 className={classes.DescriptionHeading}>All Reviews</h1>
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
    productInfo: state.products.productInfo,
    authenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSetProductInfoToNull: () => dispatch(actions.setProductInfoToNull()),
    onAddToCart: (id, quantity) => dispatch(actions.addToCart(id, quantity))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ProductPage));
