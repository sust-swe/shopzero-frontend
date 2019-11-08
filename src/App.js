import React, { Component } from "react";
import Auth from "./containers/Auth/Auth";
import { Route, Switch } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import Home from "./containers/Home/Home";
import Logout from "./containers/Auth/Logout/Logout";
import * as actions from "./store/actions/index";
import { connect } from "react-redux";

class App extends Component {
  state = {};

  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/signout" component={Logout} />
            <Route path="/signin" component={Auth} />
            <Route path="/" exact component={Home} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authStateCheck)
  };
};

export default connect(
  null,
  mapDispatchToProps
)(App);
