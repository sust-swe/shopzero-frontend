import React, { Component } from "react";
import Auth from "./containers/Auth/Auth";
import { Route, Switch } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import Home from "./containers/Home/Home";
import Logout from "./containers/Auth/Logout/Logout";
import * as actions from "./store/actions/index";
import { connect } from "react-redux";
import Menu from "./components/Navigation/Menu/Menu";
import Products from "./containers/Products/Products";
import ShowMenu from "./containers/ShowMenu/ShowMenu";
import Help from "./components/Help/Help";
import Signup from "./containers/Auth/Signup/Signup";
import SignupVerification from "./containers/Auth/Signup/SignupVerification/SignupVerification";

class App extends Component {
  state = {};

  // componentDidMount() {
  //   this.props.onTryAutoSignup();
  // }

  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/signupverify" component={SignupVerification} />
            <Route path="/showmenu" component={ShowMenu} />
            <Route path="/products" component={Products} />
            <Route path="/signout" component={Logout} />
            <Route path="/signup" component={Signup} />
            <Route path="/signin" component={Auth} />
            <Route path="/help" component={Help} />
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
