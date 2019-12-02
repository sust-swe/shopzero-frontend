import React from "react";
import classes from "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = props => (
  <ul className={classes.NavigationItems}>
    {props.isAuth ? (
      <NavigationItem link="/profile">Profile</NavigationItem>
    ) : null}

    {props.isAuth ? (
      <NavigationItem link="/signout">Sign Out</NavigationItem>
    ) : (
      <NavigationItem link="/signin">Sign In</NavigationItem>
    )}

    <NavigationItem link="/checkout">Checkout</NavigationItem>
  </ul>
);

export default NavigationItems;
