import React, { Component, Fragment } from "react";
import Input from "../../../components/UI/Input/Input";
import { MDBCol, MDBRow } from "mdbreact";
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
        <MDBRow>
          <MDBCol>
            <form className="form-inline mt-4 mb-4">
              <input
                className={classes.SearchBar}
                type="text"
                name="SearchText"
                placeholder="Search by name, brand or category"
                value={this.state.value}
                onChange={this.changeHandler}
              />
            </form>
          </MDBCol>
          <MDBCol>
            <button>Search</button>
          </MDBCol>
        </MDBRow>
      </Fragment>
    );
  }
}

export default SearchBar;
