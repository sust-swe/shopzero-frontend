import React, { Component } from "react";
import Axios from "axios";
import Logo from "../../../components/Logo/Logo";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Input/Input";
import * as actions from "../../../store/actions/actionTypes";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import withErrorHandler from "../../../hoc/withErrorHandler/withErrorHandler";
import classes from "./Signup.css";
class Signup extends Component {
  state = {
    controls: {
      firstname: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "First Name"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      lastname: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Last Name"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      username: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "username"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      password: {
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "Password"
        },
        value: "",
        validation: {
          required: true,
          minLength: 6,
          maxLength: 18
        },
        valid: false,
        touched: false
      },
      passwordConfirmation: {
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "Password Confirmation"
        },
        value: "",
        validation: {
          required: true,
          minLength: 6,
          maxLength: 18
        },
        valid: false,
        touched: false
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Email"
        },
        value: "",
        validation: {
          required: true,
          isEmail: true
        },
        valid: false,
        touched: false
      }
    }
  };

  checkValidity = (value, rules) => {
    let isValid = true;

    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }

    if (rules.isEmail) {
      const pattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
      isValid = pattern.test(value) && isValid;
    }

    if (rules.isNumeric) {
      const pattern = /^\d+$/;
      isValid = pattern.test(value) && isValid;
    }

    return isValid;
  };

  inputChangedHandler = (event, controlName) => {
    const updatedControls = {
      ...this.state.controls,
      [controlName]: {
        ...this.state.controls[controlName],
        value: event.target.value,
        valid: this.checkValidity(
          event.target.value,
          this.state.controls[controlName].validation
        ),
        touched: true
      }
    };

    this.setState({ controls: updatedControls });
  };

  submitHandler = event => {
    event.preventDefault();
  };

  render() {
    const formElementsArray = [];
    for (let key in this.state.controls) {
      formElementsArray.push({
        id: key,
        config: this.state.controls[key]
      });
    }

    let form = formElementsArray.map(formElement => (
      <Input
        key={formElement.id}
        elementType={formElement.config.elementType}
        elementConfig={formElement.config.elementConfig}
        value={formElement.config.value}
        invalid={!formElement.config.valid}
        shouldValidate={formElement.config.validation}
        touched={formElement.config.touched}
        changed={event => this.inputChangedHandler(event, formElement.id)}
      />
    ));

    // if (this.props.loading) {
    //   form = <Spinner />;
    // }

    // let response = null;

    // if (this.props.responseMessage) {
    //   response = <p>{this.props.responseMessage}</p>;
    // }

    // let authRedirect = null;

    // if (this.props.isAuthenticated) {
    //   authRedirect = <Redirect to="/" />;
    // }

    return (
      <div className={classes.Logo}>
        <Logo />
        <div className={classes.Signup}>
          {/* {authRedirect}
          {response} */}
          <form onSubmit={this.submitHandler}>
            {form}
            <button className={classes.SignupBtn}>SIGN UP</button>
          </form>
        </div>
      </div>
    );
  }
}

export default withErrorHandler(Signup, Axios);
