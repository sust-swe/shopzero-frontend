import React from "react";
import classes from "./AboutUs.css";

const AboutUs = () => {
  return (
    <div>
      <h1 className={classes.AboutUs}>
        <strong>AboutUs Page</strong>
      </h1>
      <div className={classes.Information}>
        <h3>
          This website's been created with a view to motivate people to use
          zero-waste products in their day to day life. Help us in our journey
          towards a healthy and safe lifestyle.
        </h3>
      </div>
    </div>
  );
};

export default AboutUs;
