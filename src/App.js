import React, { Component } from "react";
import Auth from "./containers/Auth/Auth";
import { Route, Switch } from "react-router-dom";
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
import SearchedProducts from "./containers/SearchedProducts/SearchedProducts";
import Products from "./containers/Products/Products";
import CartPage from "./containers/User/Cart/CartPage/CartPage";
import { connect } from "react-redux";
import CustomWebSocket from "./containers/WebSocket/CustomWebSocket";
import CartItems from "./containers/User/Cart/CartItems/CartItems";
import ProfileUpdate from "./containers/User/Profile/ProfileUpdate/ProfileUpdate";
import Checkout from "./containers/Checkout/Checkout";
import Orders from "./containers/User/Orders/Orders";

class App extends Component {
  state = {};

  handleRecieved = message => {
    console.log(message);
  };

  render() {
    let app = null;
    let routes = (
      <Switch>
        <Route path="/searchedproducts" component={SearchedProducts} />
        <Route path="/updateprofile" component={ProfileUpdate} />
        <Route path="/signupverify" component={SignupVerification} />
        <Route path="/productpage" component={ProductPage} />
        <Route path="/cartItems" component={CartItems} />
        <Route path="/products" component={Products} />
        <Route path="/cartpage" component={CartPage} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/feedback" component={Feedback} />
        <Route path="/profile" component={Profile} />
        <Route path="/signout" component={Logout} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/contact" component={Contact} />
        <Route path="/signin" component={Auth} />
        <Route path="/signup" component={Signup} />
        <Route path="/orders" component={Orders} />
        <Route path="/help" component={Help} />
        <Route path="/" exact component={Home} />
      </Switch>
    );

    if (this.props.isAuthenticated) {
      app = (
        <div>
          <Layout>
            <CustomWebSocket>{routes}</CustomWebSocket>
          </Layout>
        </div>
      );
    } else {
      app = (
        <div>
          <Layout>{routes}</Layout>
        </div>
      );
    }

    return app;
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

export default connect(mapStateToProps)(App);
