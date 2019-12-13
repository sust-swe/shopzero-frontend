import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import classes from "./Footer.css";

const Footer = () => {
  return (
    <div className={classes.Footer}>
      <MDBFooter color="black" className="font-small pt-4 mt-4">
        <MDBContainer fluid className="text-center ">
          <h6>
            Updated and Maintained by{"   "}
            <a href="https://github.com/r-0-0-t">r-0-0-t</a>
            {"   "}and{"   "}
            <a href="https://github.com/TushitaTahsin">TushitaTahsin</a>
          </h6>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href="http://localhost:3000/"> ShopZero.com </a>
          </MDBContainer>
        </div>
      </MDBFooter>
    </div>
  );
};

export default Footer;
