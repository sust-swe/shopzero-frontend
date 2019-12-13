import React, { Component } from "react";
import { MDBCol } from "mdbreact";
import classes from "./ProductPage.css";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";
import { Redirect, withRouter } from "react-router-dom";
import WriteReview from "../Reviews/WriteReview/WriteReview";
import Reviews from "../Reviews/Reviews";
import OwnReview from "../Reviews/Review/OwnReview/OwnReview";
import Rating from "react-rating";
import Star from "../../../assets/images/star-grey.png";
import StarYellow from "../../../assets/images/star-yellow.png";
import Review from "../Reviews/Review/Review";

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
    quantity: 1,
    review: null,
    reviews: null,
    totalRating: null,
    canReview: false
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

  // componentDidMount() {
  //   this.props.onSetProductInfoToNull();
  // }

  componentWillUnmount() {
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
                  <h3>{this.state.productName}</h3>
                  <h3>{this.state.productBrand}</h3>
                  <h3>${this.state.productPrice}</h3>
                  Ratings:{" "}
                  <Rating
                    className={classes.Rating}
                    initialRating={this.props.totalRating}
                    emptySymbol={<img src={Star} className="icon" />}
                    placeholderSymbol={<img src={Star} className="icon" />}
                    fullSymbol={<img src={StarYellow} className="icon" />}
                    readonly
                  />
                  <br />
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
          <div className="row">
            <div className="col-md-7">
              <h3 className={classes.FeaturesHeading}>Features</h3>
              <ul className={classes.Features}>
                {this.state.productFeatures.map(feature => {
                  return <li key={feature}>{feature}</li>;
                })}
              </ul>
            </div>

            {/*This is commented because only one item will be visible at a time*/}
            {this.props.canReview && !this.props.review ? (
              <div id="writereview" className="col-md-5">
                <WriteReview productId={this.state.productId} />
              </div>
            ) : null}

            {this.props.review ? (
              <div id="ownreview" className="col-md-3">
                <OwnReview
                  productId={this.state.productId}
                  id={this.props.review.id}
                  title={this.props.review.title}
                  rating={this.props.review.rating}
                  body={this.props.review.body}
                />
              </div>
            ) : null}

            <div>
              <h3 className={classes.ProductDescription}>
                Product Description
              </h3>
              <p>{this.state.productDescription}</p>
            </div>
          </div>
          <hr />
          <div>
            <h3 className={classes["AllReviewsHeading"]}>
              Customer Reviews({this.props.reviews.length})
            </h3>
            <div>
              {this.props.reviews.map(review => (
                <Review
                  key={review.id}
                  rating={review.rating}
                  title={review.title}
                  body={review.body}
                />
              ))}
            </div>
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
    productInfo: state.products.productInfo,
    authenticated: state.auth.token !== null,
    reviews: state.review.reviews,
    review: state.review.review,
    totalRating: state.review.totalRating,
    canReview: state.review.canReview
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSetProductInfoToNull: () => dispatch(actions.setProductInfoToNull()),
    onAddToCart: (id, quantity) => dispatch(actions.addToCart(id, quantity)),
    onCreateReview: review => dispatch(actions.createReview(review)),
    onDeleteReview: review_id => dispatch(actions.deleteReview(review_id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ProductPage));
