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
        <h4>
          <b>username</b>
        </h4>
        <Rating
          className={classes.Rating}
          initialRating={1}
          emptySymbol={<img src={Star} className="icon" />}
          placeholderSymbol={<img src={Star} className="icon" />}
          fullSymbol={<img src={StarYellow} className="icon" />}
          readonly
        />
        <h3 className={classes.Title}>Title</h3>
        <h4 className={classes.Review}>Review</h4>
        <MDBRow className={classes.ButtonMargin}>
          <button className={classes.UpdateBtn}>Update</button>
          <button className={classes.DeleteBtn}>Delete</button>
        </MDBRow>
      </div>
    );
  }
}

export default OwnReview;
