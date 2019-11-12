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
            <Route path="/products" component={Products} />
            <Route path="/feedback" component={Feedback} />
            <Route path="/profile" component={Profile} />
            <Route path="/signout" component={Logout} />
            <Route path="/contact" component={Contact} />
            <Route path="/signin" component={Auth} />
            <Route path="/signup" component={Signup} />
            <Route path="/aboutus" component={AboutUs} />
            <Route path="/cartpage" component={CartPage} />
            <Route path="/help" component={Help} />
            <Route path="/" exact component={Home} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
