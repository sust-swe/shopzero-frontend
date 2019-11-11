import React, { Component } from "react";
import Input from "../../../components/UI/Input/Input";
import classes from "./SearchBar.css";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";
class SearchBar extends Component {
  state = {
    value: "",
    filterForm: {
      filterByCategory: {
        elementType: "select",
        elementConfig: {
          options: [{ value: "fastest", displayValue: "Fastest" }]
        },
        value: "fastest",
        validation: {},
        valid: true
      },
      filterByBrand: {
        elementType: "select",
        elementConfig: {
          options: [{ value: "fastest", displayValue: "Fastest" }]
        },
        value: "fastest",
        validation: {},
        valid: true
      }
    }
  };

  changeHandler = event => {
    event.preventDefault();
    this.setState({ value: event.target.value });
  };

  searchHandler = event => {
    this.props.history.push("/searchedproducts");
  };

  inputChangedHandler = (event, filterName) => {
    const updatedFilterForm = {
      ...this.state.filterForm,
      [filterName]: {
        ...this.state.filterForm[filterName],
        value: event.target.value,
        valid: true,
        touched: true
      }
    };

    this.setState({ filterForm: updatedFilterForm });
  };

  render() {
    // const filterElementsArray = [];
    // for (let key in this.state.filterForm) {
    //   filterElementsArray.push({
    //     id: key,
    //     config: this.state.filterForm[key]
    //   });
    // }

    // let filterForm = filterElementsArray.map(filterElement => (
    //   <Input
    //     key={filterElement.id}
    //     elementType={filterElement.config.elementType}
    //     elementConfig={filterElement.config.elementConfig}
    //     value={filterElement.config.value}
    //     invalid={!filterElement.config.valid}
    //     shouldValidate={filterElement.config.validation}
    //     touched={filterElement.config.touched}
    //     changed={event => this.inputChangedHandler(event, filterElement.id)}
    //   />
    // ));

    let filterForm = (
      <div>
        <div>let categoryOptions = this.props.categories;</div>
        <div></div>
      </div>
    );

    return (
      <div>
        <div className={classes.center}>
          <input
            type="text"
            className={classes.mainInput}
            type="text"
            name="SearchText"
            placeholder="Search"
            value={this.state.value}
            onChange={this.changeHandler}
          />
          <input
            id={classes.mainSubmit}
            className=""
            type="submit"
            value="Search"
            // onClick={this.searchHandler}
          />
        </div>
        {/* <div className={classes.FilterForm}>{filterForm}</div> */}
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

export default connect(mapStateToProps)(withRouter(SearchBar));
