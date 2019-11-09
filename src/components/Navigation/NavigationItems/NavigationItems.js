import React from "react";
import classes from "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = props => (
  <ul className={classes.NavigationItems}>
    {props.isAuth ? (
      <NavigationItem link="/signout">Sign Out</NavigationItem>
    ) : (
      <NavigationItem link="/signin">Sign In</NavigationItem>
    )}
    {props.isAuth ? (
      <NavigationItem link="/" exact>
        Home
      </NavigationItem>
    ) : null}
    <NavigationItem link="/products">Products</NavigationItem>
    <NavigationItem link="/showmenu">Menu</NavigationItem>
  </ul>
);

export default NavigationItems;
