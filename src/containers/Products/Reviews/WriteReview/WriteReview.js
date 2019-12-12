import React, { Component } from "react";
import Rating from "react-rating";
import Star from "../../../../assets/images/star.png";
import StarYellow from "../../../../assets/images/yellow-star.png";
import classes from "./WriteReview.css";

class WriteReview extends Component {
  state = {};

  hoverHandler = () => {};

  ratingChangedHandler = value => {
    console.log(value);
  };

  render() {
    return (
      <div>
        <h2>
          <strong>Rate this Product</strong>
        </h2>
        <Rating
          className={classes.Rating}
          onChange={value => this.ratingChangedHandler(value)}
          initialRating={1}
          emptySymbol={<img src={Star} className="icon" />}
          placeholderSymbol={<img src={Star} className="icon" />}
          fullSymbol={<img src={StarYellow} className="icon" />}
        />
        <h2>
          <strong>Write a review about it</strong>
        </h2>
        <input className={classes.Title} placeholder="title"></input>
        <textarea className={classes.Review} placeholder="review"></textarea>
        <button className={classes.PostBtn}>Post</button>
      </div>
    );
  }
}

export default WriteReview;
