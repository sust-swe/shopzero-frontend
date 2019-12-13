import React, { Component } from "react";
import Rating from "react-rating";
import Star from "../../../../assets/images/star.png";
import StarYellow from "../../../../assets/images/yellow-star.png";
import classes from "./WriteReview.css";
import { connect } from "react-redux";
import * as actions from "../../../../store/actions/index";
import { Alert } from "reactstrap";
import { withRouter } from "react-router-dom";

class WriteReview extends Component {
  state = {
    rating: 5,
    title: null,
    review: null,
    visible: false,
    message: null
  };

  ratingChangedHandler = value => {
    this.setState({ rating: value });
  };

  titleChangedHandler = event => {
    this.setState({ title: event.target.value });
  };

  reviewChangedHandler = event => {
    this.setState({ review: event.target.value });
  };

  postHandler = event => {
    event.preventDefault();

    if (this.state.rating && this.state.title && this.state.review) {
      const review = {
        product_id: this.props.productId,
        title: this.state.title,
        body: this.state.review,
        rating: this.state.rating
      };

      this.props.onCreateReview(review);
      this.props.history.push("/productpage");
    } else {
      this.onShowAlert("Please give both title and review");
    }
  };

  onShowAlert = message => {
    this.setState({ message: message, visible: true }, () => {
      window.setTimeout(() => {
        this.setState({ visible: false });
      }, 2000);
    });
  };

  render() {
    return (
      <div>
        <h6>
          <strong>Rate this Product</strong>
        </h6>
        <Rating
          className={classes.Rating}
          onChange={value => this.ratingChangedHandler(value)}
          initialRating={this.state.rating}
          emptySymbol={<img src={Star} className="icon" />}
          placeholderSymbol={<img src={Star} className="icon" />}
          fullSymbol={<img src={StarYellow} className="icon" />}
        />
        <h6>
          <strong>Write a review about it</strong>
        </h6>
        <input
          className={classes.Title}
          placeholder="title"
          onChange={this.titleChangedHandler}
        ></input>
        <textarea
          className={classes.Title}
          placeholder="review"
          onChange={this.reviewChangedHandler}
        ></textarea>
        <Alert color="warning" isOpen={this.state.visible}>
          {this.state.message}
        </Alert>
        <button className="btn-success btn-sm" onClick={this.postHandler}>
          Post
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onCreateReview: review => dispatch(actions.createReview(review))
  };
};

export default connect(null, mapDispatchToProps)(withRouter(WriteReview));
