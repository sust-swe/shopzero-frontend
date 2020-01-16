import React, { Component, Fragment } from "react";
import Modal from "../../components/UI/Modal/Modal";
import { Alert } from "reactstrap";

const withErrorHandler = (WrappedComponent, Axios) => {
  return class extends Component {
    state = {
      error: null,
      message: null,
      visible: false
    };

    constructor() {
      super();
      this.reqInterceptor = Axios.interceptors.request.use(req => {
        this.setState({ error: null });
        return req;
      });
      this.resInterceptor = Axios.interceptors.response.use(
        res => res,
        error => {
          this.setState({ error: error.response.status });
          this.onShowAlert(error.response.status);
        }
      );
    }

    componentWillUnmount() {
      Axios.interceptors.request.eject(this.reqInterceptor);
      Axios.interceptors.response.eject(this.resInterceptor);
    }

    errorConfirmedHandler = () => {
      this.setState({ error: null });
    };

    onShowAlert = message => {
      this.setState({ message: message, visible: true }, () => {
        window.setTimeout(() => {
          this.setState({ visible: false });
          this.errorConfirmedHandler();
        }, 2000);
      });
    };

    render() {
      return (
        <Fragment>
          <Modal
            show={this.state.error}
            modalClosed={this.errorConfirmedHandler}
          >
            {this.state.error ? (
              <Alert isOpen={this.state.visible} color="danger">
                {this.state.message}
              </Alert>
            ) : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Fragment>
      );
    }
  };
};

export default withErrorHandler;
