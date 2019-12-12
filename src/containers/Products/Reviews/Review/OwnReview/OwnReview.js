import React, { Component } from "react";
import Rating from "react-rating";
import Star from "../../../../../assets/images/star.png";
import StarYellow from "../../../../../assets/images/yellow-star.png";
import classes from "./OwnReview.css";
import { MDBRow } from "mdbreact";

class OwnReview extends Component {
  state = {};
  render() {
    return (
      <div>
        <p className="font-weight-light">on {"2019-4-24 6:0 GMT"}, you wrote</p>
        <Rating
          className={classes.Rating}
          initialRating={1}
          emptySymbol={<img src={Star} className="icon" />}
          placeholderSymbol={<img src={Star} className="icon" />}
          fullSymbol={<img src={StarYellow} className="icon" />}
          readonly
        />
        <p className="font-weight-bold font-italic">Eu fugiat.</p>

        <p className="font-weight-light font-italic">
          Elit occaecat ut exercitation dolore est voluptate in in reprehenderit
          mollit.
        </p>
        <div className={classes.manageReviewBtn}>
          <button className="btn-info btn-sm">Update</button>
          <button className="btn-danger btn-sm">Delete</button>
        </div>
      </div>
    );
  }
}

export default OwnReview;
