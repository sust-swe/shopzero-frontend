import React, { Component } from "react";
import Input from "../../../../components/UI/Input/Input";
import { connect } from "react-redux";
import classes from "./PasswordChange.css";
import { Alert } from "reactstrap";
import * as actions from "../../../../store/actions/index";
import { withRouter } from "react-router-dom";
import Spinner from "../../../../components/UI/Spinner/Spinner";

class PasswordChange extends Component {
  state = {
    controls: {
      currentPassword: {
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "Current Password"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      newPassword: {
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "New Password"
        },
        value: "",
        validation: {
          required: true,
          isPassword: true
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
          equalsPassword: true
        },
        valid: false,
        touched: false
      }
    },
    formIsValid: false,
    username: null,
    visible: false,
    message: null
  };

  componentDidMount() {
    if (!this.props.isAuthenticated) {
      this.props.history.push("/");
    }
  }

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

    if (rules.isPassword) {
      const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
      isValid = pattern.test(value) && isValid;
    }

    if (rules.equalsPassword) {
      const password = this.state.controls.newPassword.value;
      isValid = value === password && isValid;
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

    let formIsValid = true;
    for (let controlName in updatedControls) {
      formIsValid = updatedControls[controlName].valid && formIsValid;
    }

    this.setState({ controls: updatedControls, formIsValid: formIsValid });
  };

  submitHandler = event => {
    event.preventDefault();

    let message = null;

    if (!this.state.formIsValid) {
      message = "Please fill up the whole form correctly";
      this.onShowAlert(message);
    } else {
      const changedPassword = {
        password: this.state.controls.currentPassword.value,
        new_password: this.state.controls.newPassword.value
      };

      message = "Password changed successfully!";
      this.onShowAlert(message);
      this.props.onChangePassword(changedPassword);
    }
  };

  onShowAlert = message => {
    this.setState({ message: message, visible: true }, () => {
      window.setTimeout(() => {
        this.setState({ visible: false });
        if (message === "Password changed successfully!") {
          this.props.history.push("/profile");
        }
      }, 2000);
    });
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

    if (this.props.loading) {
      form = <Spinner />;
    }

    return (
      <div>
        <div className={classes.PasswordChange}>
          <form onSubmit={this.submitHandler}>
            {form}
            {!this.state.formIsValid ? (
              <Alert color="warning" isOpen={this.state.visible}>
                {this.state.message}
              </Alert>
            ) : (
              <Alert color="success" isOpen={this.state.visible}>
                {this.state.message}
              </Alert>
            )}
            <button className={classes.UpdateBtn}>Change Password</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChangePassword: password => dispatch(actions.changePassword(password))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(PasswordChange));
