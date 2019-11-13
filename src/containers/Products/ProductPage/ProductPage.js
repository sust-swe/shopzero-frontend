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
    productStock: null
  };

  constructor(props) {
    super(props);
    if (props.productName) {
      this.state = {
        productName: props.productName,
        productPrice: props.productPrice,
        productCategory: props.productCategory,
        productBrand: props.productBrand,
        productDescription: props.productDescription,
        productFeatures: props.productFeatures,
        productImage: props.productImage,
        productStock: props.productStock
      };
    } else {
      this.state = {
        productName: null,
        productPrice: null,
        productCategory: null,
        productBrand: null,
        productDescription: null,
        productFeatures: null,
        productImage: null,
        productStock: null
      };
    }
  }

  componentDidMount() {
    console.log(this.state.info);
    this.props.onSetProductInfoToNull();
  }

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
                    <h3>Image</h3>
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
                      <button className={classes.Button}>-</button>
                      <h6>Quantity: 1</h6>
                      <button className={classes.Button}>+</button>
                    </div>
                  </div>
                  <div>
                    <button className="btn btn-success">Add to Cart</button>
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
    productName: state.products.productName,
    productPrice: state.products.productPrice,
    productCategory: state.products.productCategory,
    productBrand: state.products.productBrand,
    productDescription: state.products.productDescription,
    productFeatures: state.products.productFeatures,
    productImage: state.products.productImage,
    productStock: state.products.productStock
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSetProductInfoToNull: () => dispatch(actions.setProductInfoToNull())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
