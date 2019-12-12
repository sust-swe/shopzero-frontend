import React, { Component } from "react";
import Rating from "react-rating";
import StarGrey from "../../../../assets/images/star-grey.png";
import StarYellow from "../../../../assets/images/star-yellow.png";

class Rating extends Component {
  state = {};

  hoverHandler = () => {};

  ratingChangedHandler = value => {
    console.log(value);
  };

  render() {
    return (
      <div>
        <Rating
          onChange={value => this.ratingChangedHandler(value)}
          initialRating={1}
          emptySymbol={<img src={StarGrey} className="icon" />}
          placeholderSymbol={<img src={StarGrey} className="icon" />}
          fullSymbol={<img src={StarYellow} className="icon" />}
        />
      </div>
    );
  }
}

export default Rating;
