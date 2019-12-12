import React, { Component } from "react";
import Rating from "react-rating";
import Star from "../../../../../assets/images/star.png";
import StarYellow from "../../../../../assets/images/yellow-star.png";
import classes from "./OwnReview.css";
import { connect } from "react-redux";
import * as actions from "../../../../../store/actions/index";

class OwnReview extends Component {
  state = {};

  updateReviewHandler = event => {};

  deleteReviewHandler = event => {};

  render() {
    return (
      <div>
        <p className="font-weight-light">on {"2019-4-24 6:0 GMT"}, you wrote</p>
        <Rating
          className={classes.Rating}
          initialRating={this.props.rating}
          emptySymbol={<img src={Star} className="icon" />}
          placeholderSymbol={<img src={Star} className="icon" />}
          fullSymbol={<img src={StarYellow} className="icon" />}
          readonly
        />
        <p className="font-weight-bold font-italic">{this.props.title}</p>

        <p className="font-weight-light font-italic">{this.props.body}</p>
        <div className={classes.manageReviewBtn}>
          <button className="btn-success btn-sm">Update</button>
          <button className="btn-danger btn-sm">Delete</button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onUpdateReview: review => dispatch(actions.createReview(review)),
    onDeleteReview: review_id => dispatch(actions.deleteReview(review_id))
  };
};

export default connect(null, mapDispatchToProps)(OwnReview);
