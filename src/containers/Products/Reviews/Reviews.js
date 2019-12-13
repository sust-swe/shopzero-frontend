import React, { Component } from "react";
import Review from "./Review/Review";

class Reviews extends Component {
  state = {};
  render() {
    return (
      <div>
        <Review />
        <Review />
      </div>
    );
  }
}

export default Reviews;
