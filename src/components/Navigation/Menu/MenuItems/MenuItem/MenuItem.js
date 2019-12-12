import React from "react";
import classes from "./MenuItem.css";
import { NavLink } from "react-router-dom";

const MenuItem = props => (
	<li className={classes.MenuItem}>
		<NavLink
			to={props.link}
			activeClassName={classes.active}
			exact={props.exact}
		>
			{props.children}
		</NavLink>
	</li>
);

export default MenuItem;
