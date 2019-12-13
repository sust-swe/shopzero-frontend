import React from "react";
import classes from "./MenuItems.css";
import MenuItem from "./MenuItem/MenuItem";

const MenuItems = props => (
  <ul className={classes.MenuItems}>
    <MenuItem link="/" exact>
      Home
    </MenuItem>
    <MenuItem link="/contact">Contact</MenuItem>
    <MenuItem link="/help">Help</MenuItem>
    {/* <MenuItem link="/feedback">Feedback</MenuItem> */}
    <MenuItem link="/aboutus">About Us</MenuItem>
  </ul>
);

export default MenuItems;
