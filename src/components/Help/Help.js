import React from "react";
import classes from "./Help.css";

const Help = () => {
  return (
    <div>
      <h1 className={classes.Help}>Help Page</h1>
      <h2 className={classes.Header}>
        Hello, Welcome to ShopZero. This page is a user manual denoting how to
        use the site.
      </h2>
      <div className={classes.Information}>
        <ol>
          <li>
            <h3>
              Products of the site can be explored without signing up, but if
              you wish to buy a product then please sign up first
            </h3>
          </li>

          <li>
            <h3>
              Products of the site can be explored without signing up, but if
              you wish to buy a product then please sign up first
            </h3>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Help;
