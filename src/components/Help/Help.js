import React from "react";
import classes from "./Help.css";

const Help = () => {
  return (
    <div>
      <h2 className={classes.Header}>
        Hello, Welcome to ShopZero. This page is a user manual denoting how to
        use the site.
      </h2>
      <div>
        <ol>
          <li className={classes.Information}>
            <h3>
              Products of the site can be explored without signing up, but if
              you wish to buy a product then please sign up first
            </h3>
          </li>

          <li className={classes.Information}>
            <h3>
              Products can be searched using names and by filtering them with
              brands and categories
            </h3>
          </li>

          <li className={classes.Information}>
            <h3>
              Products can be searched using names and by filtering them with
              brands and categories
            </h3>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Help;
