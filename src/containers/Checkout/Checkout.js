import React, { Component } from "react";
import classes from "./Checkout.css";
import Input from "../../components/UI/Input/Input";
import { MDBCol } from "mdbreact";
import CartSummary from "../User/Cart/CartSummary/CartSummary";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../../store/actions/index";
import { Alert } from "reactstrap";
class Checkout extends Component {
  state = {
    controls: {
      city: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "City"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      house: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "House No"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      road: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Road No"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      area: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Area"
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
          type: "text",
          placeholder: "Phone no"
        },
        value: "",
        validation: {
          required: true,
          minLength: 11,
          maxLength: 14
        },
        valid: false,
        touched: false
      }
    },
    formIsValid: false,
    visible: false,
    message: null
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

    let address = {
      city: this.state.controls.city.value,
      house_no: this.state.controls.house.value,
      road: this.state.controls.road.value,
      area: this.state.controls.area.value,
      phone_no: this.state.controls.phoneNo.value
    };

    this.props.onPlaceOrder(address);
    let message = "Your orders has been placed!";
    this.onShowAlert(message);
  };

  onShowAlert = message => {
    this.setState({ message: message, visible: true }, () => {
      window.setTimeout(() => {
        this.setState({ visible: false });
        if (message === "Your order has been placed!") {
          this.props.history.push("/orders");
        }
      }, 2000);
    });
  };

  useProfileInfoHandler = () => {
    if (
      this.props.profileInfo.city !== null ||
      this.props.profileInfo.house_no !== null ||
      this.props.profileInfo.road !== null ||
      this.props.profileInfo.area !== null ||
      this.props.profileInfo.phone_no !== null
    ) {
      this.setState(prevstate => ({
        ...prevstate,
        message: null,
        controls: {
          ...prevstate.controls,
          city: {
            ...prevstate.controls.city,
            value: this.props.profileInfo.city
          },
          house: {
            ...prevstate.controls.house,
            value: this.props.profileInfo.house_no
          },
          road: {
            ...prevstate.controls.road,
            value: this.props.profileInfo.road
          },
          area: {
            ...prevstate.controls.area,
            value: this.props.profileInfo.area
          },
          phoneNo: {
            ...prevstate.controls.phoneNo,
            value: this.props.profileInfo.phone_no
          }
        }
      }));

      // this.inputChangedHandler(this.state.controls.road);
    } else {
      let message =
        "Update your profile with these infos first or just fill up the form";
      this.onShowAlert(message);
    }
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

    return (
      <div>
        <Alert color="success" isOpen={this.state.visible}>
          {this.state.message}
        </Alert>
        <div>
          <button
            className={classes.ProfileInfoBtn}
            onClick={this.useProfileInfoHandler}
          >
            Use profile info
          </button>
        </div>
        <div className={classes.Row}>
          <MDBCol md="6">
            <div className={classes.Form}>
              <form onSubmit={this.submitHandler}>
                {form}
                <button
                  className={classes.Button}
                  disabled={!this.state.formIsValid}
                >
                  Place Order
                </button>
              </form>
            </div>
          </MDBCol>
          <MDBCol md="6">
            <CartSummary />
          </MDBCol>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    profileInfo: state.auth.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onPlaceOrder: address => dispatch(actions.placeOrder(address))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Checkout));
