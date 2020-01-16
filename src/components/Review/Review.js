import React from "react";
import classes from "./Review.css";
import Star from "../../assets/images/star.png";
import StarYellow from "../../assets/images/yellow-star.png";
import Rating from "react-rating";

const Review = props => {
  return (
    <div>
      <p className="font-weight-light">
        on <i>{props.updatedAt}</i>, {props.username} wrote
      </p>
      <Rating
        className={classes.Rating}
        initialRating={props.rating}
        emptySymbol={<img src={Star} className="icon" />}
        placeholderSymbol={<img src={Star} className="icon" />}
        fullSymbol={<img src={StarYellow} className="icon" />}
        readonly
      />
      <p className="font-weight-bold font-italic">{props.title}</p>

      <p className="font-weight-light font-italic">{props.body}</p>
    </div>
  );
};

export default Review;
