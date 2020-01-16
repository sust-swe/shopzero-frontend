import React, { Component } from "react";
import Input from "../../../../components/UI/Input/Input";
import classes from "./ProfileUpdate.css";
import { connect } from "react-redux";
import * as actions from "../../../../store/actions/index";
import { withRouter } from "react-router-dom";
import { Alert } from "reactstrap";
import Spinner from "../../../../components/UI/Spinner/Spinner";
class ProfileUpdate extends Component {
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
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Email"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      phoneNo: {
        elementType: "input",
        elementConfig: {
          type: "number",
          placeholder: "phoneNo"
        },
        value: "",
        validation: {
          isNumeric: true,
          maxLength: 14,
          minLength: 11,
          required: true
        },
        valid: false,
        touched: false
      },
      houseNo: {
        elementType: "input",
        elementConfig: {
          type: "number",
          placeholder: "houseNo"
        },
        value: "",
        validation: {
          isNumeric: true,
          required: true
        },
        valid: false,
        touched: false
      },
      roadNo: {
        elementType: "input",
        elementConfig: {
          type: "number",
          placeholder: "roadNo"
        },
        value: "",
        validation: {
          isNumeric: true,
          required: true
        },
        valid: false,
        touched: false
      },
      area: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "area"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      city: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "city"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      country: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "country"
        },
        value: "",
        validation: {
          required: true
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

    if (this.props.user.phone_no === null) {
      this.setState(prevstate => ({
        ...prevstate,
        visible: false,
        username: this.props.user.username,
        message: null,
        controls: {
          ...prevstate.controls,
          firstname: {
            ...prevstate.controls.firstname,
            value: this.props.user.firstname,
            valid: true
          },
          lastname: {
            ...prevstate.controls.lastname,
            value: this.props.user.lastname,
            valid: true
          },
          email: {
            ...prevstate.controls.email,
            value: this.props.user.email,
            valid: true
          }
        }
      }));
    } else {
      this.setState(prevstate => ({
        ...prevstate,
        visible: false,
        username: this.props.user.username,
        message: null,
        controls: {
          ...prevstate.controls,
          firstname: {
            ...prevstate.controls.firstname,
            value: this.props.user.firstname,
            valid: true
          },
          lastname: {
            ...prevstate.controls.lastname,
            value: this.props.user.lastname,
            valid: true
          },
          email: {
            ...prevstate.controls.email,
            value: this.props.user.email,
            valid: true
          },
          phoneNo: {
            ...prevstate.controls.phoneNo,
            value: this.props.user.phone_no,
            valid: true
          },
          houseNo: {
            ...prevstate.controls.houseNo,
            value: this.props.user.house_no,
            valid: true
          },
          roadNo: {
            ...prevstate.controls.roadNo,
            value: this.props.user.road,
            valid: true
          },
          area: {
            ...prevstate.controls.area,
            value: this.props.user.area,
            valid: true
          },
          city: {
            ...prevstate.controls.city,
            value: this.props.user.city,
            valid: true
          },
          country: {
            ...prevstate.controls.country,
            value: this.props.user.country,
            valid: true
          }
        },
        formIsValid: true
      }));
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
      const updateInfo = {
        user: {
          firstname: this.state.controls.firstname.value,
          lastname: this.state.controls.lastname.value,
          email: this.state.controls.email.value,
          phone_no: this.state.controls.phoneNo.value,
          house_no: this.state.controls.houseNo.value,
          road: this.state.controls.roadNo.value,
          area: this.state.controls.area.value,
          city: this.state.controls.city.value,
          country: this.state.controls.country.value
        }
      };
      this.props.onUpdateProfile(this.state.username, updateInfo);
      message = "Your Profile has been updated successfully!";
      this.onShowAlert(message);
    }
  };

  onShowAlert = message => {
    this.setState({ message: message, visible: true }, () => {
      window.setTimeout(() => {
        this.setState({ visible: false });
        if (message === "Your Profile has been updated successfully!") {
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
        <div className={classes.ProfileUpdate}>
          <form onSubmit={this.submitHandler}>
            {form}
            {this.state.message ===
            "Your Profile has been updated successfully!" ? (
              <Alert color="success" isOpen={this.state.visible}>
                {this.state.message}
              </Alert>
            ) : (
              <Alert color="warning" isOpen={this.state.visible}>
                {this.state.message}
              </Alert>
            )}
            <button className={classes.UpdateBtn}>Update Profile</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    loading: state.auth.loading,
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onUpdateProfile: (username, updateInfo) =>
      dispatch(actions.updateUser(username, updateInfo))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ProfileUpdate));
