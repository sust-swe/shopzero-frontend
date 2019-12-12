import React from "react";
import classes from "./Review.css";
import Star from "../../../../assets/images/star.png";
import StarYellow from "../../../../assets/images/yellow-star.png";
import Rating from "react-rating";

const Review = () => {
  return (
    <div>
      <p className="font-weight-light">
        on <i>{"2019-4-24 6:0 GMT"}</i>, {"username"} wrote
      </p>
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
    </div>
  );
};

export default Review;
