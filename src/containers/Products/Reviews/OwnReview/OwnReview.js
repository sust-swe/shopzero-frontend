import React, { Component } from "react";
import Rating from "react-rating";
import Star from "../../../../assets/images/star.png";
import StarYellow from "../../../../assets/images/yellow-star.png";
import classes from "./OwnReview.css";
import { connect } from "react-redux";
import * as actions from "../../../../store/actions/index";
import { withRouter } from "react-router-dom";
import Modal from "../../../../components/UI/Modal/Modal";
import WriteReview from "../WriteReviews/WriteReview";
import { Alert } from "reactstrap";

class OwnReview extends Component {
  state = {
    updating: false,
    visible: false,
    message: null
  };

  updateReviewHandler = event => {
    event.preventDefault();
    this.setState({ updating: true });
  };

  updateCancelledHandler = () => {
    this.setState({ updating: false });
  };

  deleteReviewHandler = event => {
    event.preventDefault();
    this.props.onDeleteReview(this.props.id);
    this.onShowAlert(
      "Your review has been deleted, it will be updated shortly"
    );
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
        <Alert color="success" isOpen={this.state.visible}>
          {this.state.message}
        </Alert>
        <Modal
          show={this.state.updating}
          modalClosed={this.updateCancelledHandler}
        >
          <WriteReview productId={this.props.productId} modal={true} />
        </Modal>
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
          <button
            className="btn-success btn-sm"
            onClick={this.updateReviewHandler}
          >
            Update
          </button>
          <button
            className="btn-danger btn-sm"
            onClick={this.deleteReviewHandler}
          >
            Delete
          </button>
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

export default connect(null, mapDispatchToProps)(withRouter(OwnReview));
