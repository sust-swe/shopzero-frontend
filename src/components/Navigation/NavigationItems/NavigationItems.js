import React from "react";
import classes from "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" exact>
      Sign In
    </NavigationItem>
    <NavigationItem link="/home">Home</NavigationItem>
  </ul>
);

export default NavigationItems;
