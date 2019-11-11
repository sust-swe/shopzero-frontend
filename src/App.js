import React, { Component } from "react";
import Auth from "./containers/Auth/Auth";
import { Route, Switch, withRouter } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import Home from "./containers/Home/Home";
import Logout from "./containers/Auth/Logout/Logout";
import Help from "./components/Help/Help";
import Signup from "./containers/Auth/Signup/Signup";
import SignupVerification from "./containers/Auth/Signup/SignupVerification/SignupVerification";
import ProductPage from "./containers/Products/ProductPage/ProductPage";
import Contact from "./components/Contact/Contact";
import Feedback from "./containers/Feedback/Feedback";
import AboutUs from "./components/AboutUs/AboutUs";
import Profile from "./containers/User/Profile/Profile";
import Cart from "./containers/User/Cart/Cart";
import SearchedProducts from "./containers/SearchedProducts/SearchedProducts";
import { connect } from "react-redux";
import * as actions from "./store/actions/index";

class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/searchedproducts" component={SearchedProducts} />
            <Route path="/signupverify" component={SignupVerification} />
            <Route path="/productpage" component={ProductPage} />
            <Route path="/feedback" component={Feedback} />
            <Route path="/profile" component={Profile} />
            <Route path="/signout" component={Logout} />
            <Route path="/contact" component={Contact} />
            <Route path="/signin" component={Auth} />
            <Route path="/signup" component={Signup} />
            <Route path="/aboutus" component={AboutUs} />
            <Route path="/cart" component={Cart} />
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
    onFetchBrands: () => dispatch(actions.fetchBrands()),
    onFetchCategories: () => dispatch(actions.fetchCategories())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(App);
