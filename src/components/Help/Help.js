import React from "react";
import classes from "./Help.css";

const Help = () => {
  return (
    <div>
      <h1>Frequently Asked Questions</h1>
      <div>
        <h4 className={classes["accordion"]}>How to buy a product?</h4>
        <div className="panel">
          <p>
            Products of the site can be explored without signing up, but if you
            wish to buy a product then please sign up first.
          </p>
        </div>

        <h4 className={classes["accordion"]}>How to Search Products?</h4>
        <div className="panel">
          <p>
            Products can be searched using names and by filtering them with
            brands and categories.
          </p>
        </div>

        <h4 className={classes["accordion"]}>What is a Cart?</h4>
        <div className="panel">
          <p>
            If you like a product and add it to your cart , you can access this
            cart from anywhere!
          </p>
        </div>
        <h4 className={classes["accordion"]}>How to checkout the products?</h4>
        <div className="panel">
          <p>
            Click the cart icon to navigate to the cart page and You can remove
            any product or checkout the products from there!.
          </p>
        </div>
        <h4 className={classes["accordion"]}>
          Do I need to give my information everytime I order?
        </h4>
        <div className="panel">
          <p>
            You can use your profile information or enter manual information at
            the checkout page. To update your profile information or change
            password navigate to profile page.
          </p>
        </div>
        <h4 className={classes["accordion"]}>Where Can I see my Orders?</h4>
        <div className="panel">
          <p>
            Goto Orders to see what orders are pending, and what orders are
            delivered!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Help;
