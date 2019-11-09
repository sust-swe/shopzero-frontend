import React, { Component, Fragment } from "react";
import Input from "../../../components/UI/Input/Input";
import { MDBCol, MDBIcon } from "mdbreact";
import classes from "./SearchBar.css";

class SearchBar extends Component {
  state = {
    value: ""
  };

  changeHandler = event => {
    event.preventDefault();
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <Fragment>
        <div className={classes.center}>
          <input
            type="text"
            className={classes.mainInput}
            type="text"
            name="SearchText"
            placeholder="Search by name, brand or category"
            value={this.state.value}
            onChange={this.changeHandler}
          />
          <input
            id={classes.mainSubmit}
            className=""
            type="submit"
            value="Search"
          />
        </div>
      </Fragment>
    );
  }
}

export default SearchBar;
