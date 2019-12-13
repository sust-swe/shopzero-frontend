import React from "react";
import classes from "./Contact.css";

const Contact = () => {
  return (
    <div>
      {/* <h1 className={classes.Contact}>
        <strong>Contact Page</strong>
      </h1> */}
      <div className={classes.Information}>
        <h3>
          <strong>Company: </strong> ShopZero
        </h3>
        <h3>
          <strong>Main Office: </strong> SUST
        </h3>
        <h3>
          <strong>Email: </strong> shopzerobd@gmail.com
        </h3>
        <h3>
          <strong>Landline: </strong> +880 25687456
        </h3>
      </div>
    </div>
  );
};

export default Contact;
