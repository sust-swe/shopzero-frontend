import React from "react";
import classes from "./Toolbar.css";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const Toolbar = props => (
  <header className={classes.Toolbar}>
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <nav className={classes.DesktopOnly}>
      <NavigationItems isAuth={props.authenticated} />
    </nav>
  </header>
);

export default Toolbar;
