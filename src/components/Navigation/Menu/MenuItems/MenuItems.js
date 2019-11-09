import React from "react";
import classes from "./MenuItems.css";
import MenuItem from "./MenuItem/MenuItem";

const MenuItems = props => (
  <ul className={classes.MenuItems}>
    <MenuItem link="/">Home</MenuItem>
    <MenuItem link="/help">Help</MenuItem>
  </ul>
);

export default MenuItems;
