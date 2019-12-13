import React, { Component } from "react";
import { Alert } from "reactstrap";

const withAlertMessagesContainer = (WrappedComponent, message) => {
  return class extends Component {
    state = {
      message: null,
      visible: false
    };

    constructor(props) {
      super(props);
      this.state = {
        message: null,
        visible: false
      };
    }

    onShowAlert = () => {
      this.setState({ message: message, visible: true }, () => {
        window.setTimeout(() => {
          this.setState({ visible: false });
        }, 5000);
      });
    };

    render() {
      return (
        <div>
          {this.onShowAlert}
          <Alert color="success" isOpen={this.state.visible}>
            {this.state.message}
          </Alert>
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  };
};

export default withAlertMessagesContainer;
