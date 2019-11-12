import React, { Component } from "react";
import classes from "./SearchBar.css";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";
class SearchBar extends Component {
  state = {
    nameValue: "",
    categoryValue: "none",
    brandValue: "none"
  };

  componentDidMount() {
    this.props.onFetchCategories();
    this.props.onFetchBrands();
  }

  searchBarChangedHandler = event => {
    event.preventDefault();
    this.setState({ nameValue: event.target.value });
  };

  categoryChangedHandler = event => {
    event.preventDefault();
    this.setState({ categoryValue: event.target.value });
  };

  brandChangedHandler = event => {
    event.preventDefault();
    this.setState({ brandValue: event.target.value });
  };

  searchHandler = event => {
    if (this.state.nameValue) {
      this.props.onFetchSearchedProducts(
        this.state.nameValue,
        this.state.categoryValue,
        this.state.brandValue
      );
      this.props.history.push("/searchedProducts");
    }
  };

  render() {
    let filterForm = (
      <div>
        <div>
          <select
            className={classes.Select}
            onChange={this.categoryChangedHandler}
          >
            {this.props.categories.map(option => (
              <option key={option.name} value={option.name}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <select
            className={classes.Select}
            onChange={this.brandChangedHandler}
          >
            {this.props.brands.map(option => (
              <option key={option.name} value={option.name}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    );

    return (
      <div>
        <div className={classes.center}>
          <input
            className={classes.mainInput}
            type="text"
            name="SearchText"
            placeholder="Search"
            value={this.state.value}
            onChange={this.searchBarChangedHandler}
          />
          <input
            id={classes.mainSubmit}
            className=""
            type="submit"
            value="Search"
            onClick={this.searchHandler}
          />
        </div>

        <div className={classes.FilterForm}>{filterForm}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    brands: state.products.brands,
    categories: state.products.categories
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchBrands: () => dispatch(actions.fetchBrands()),
    onFetchCategories: () => dispatch(actions.fetchCategories()),
    onFetchSearchedProducts: (name, category, brand) =>
      dispatch(actions.fetchSearchedProducts(name, category, brand))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SearchBar));
