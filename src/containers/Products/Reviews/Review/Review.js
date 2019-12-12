import React from "react";
import classes from "./Review.css";
import Star from "../../../../assets/images/star.png";
import StarYellow from "../../../../assets/images/yellow-star.png";
import Rating from "react-rating";

const Review = () => {
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
    </div>
  );
};

export default Review;
