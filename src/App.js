import React, { Component } from "react";
import Auth from "./containers/Auth/Auth";
import { Route, Switch, withRouter } from "react-router-dom";
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
import ProductPage from "./containers/Products/ProductPage/ProductPage";
import Contact from "./components/Contact/Contact";
import Feedback from "./containers/Feedback/Feedback";
import AboutUs from "./components/AboutUs/AboutUs";

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
            <Route path="/signupverify" component={SignupVerification} />
            <Route path="/productpage" component={ProductPage} />
            <Route path="/showmenu" component={ShowMenu} />
            <Route path="/products" component={Products} />
            <Route path="/feedback" component={Feedback} />
            <Route path="/signout" component={Logout} />
            <Route path="/contact" component={Contact} />
            <Route path="/signin" component={Auth} />
            <Route path="/signup" component={Signup} />
            <Route path="/aboutus" component={AboutUs} />
            <Route path="/help" component={Help} />
            <Route path="/" exact component={Home} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token != null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authStateCheck)
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
