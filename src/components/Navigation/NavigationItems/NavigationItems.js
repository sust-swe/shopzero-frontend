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

    {props.isAuth ? (
      <NavigationItem link="/orders">Orders</NavigationItem>
    ) : null}

    <NavigationItem link="/rating">Rating</NavigationItem>
    <NavigationItem link="/review">Review</NavigationItem>
  </ul>
);

export default NavigationItems;
