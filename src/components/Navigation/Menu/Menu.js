import React, { Component } from "react";
import MenuItems from "./MenuItems/MenuItems";
import classes from "./Menu.css";
class Menu extends Component {
	state = {};
	render() {
		return (
			<div className={classes.Menu}>
				<MenuItems />
			</div>
		);
	}
}

export default Menu;
