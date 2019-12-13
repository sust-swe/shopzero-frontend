import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import classes from "./Footer.css";

const Footer = () => {
  return (
    <div className={classes.Footer}>
      <MDBFooter color="black" className="font-small pt-4 mt-4">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="6">
              <h5 className="title">Footer Content</h5>
              <p>
                Here you can use rows and columns here to organize your footer
                content.
              </p>
            </MDBCol>
            <MDBCol md="6">
              <h5 className="title">Menu</h5>
              <ul>
                <li className="list-unstyled">
                  <a href="http://localhost:3000/">Home</a>
                </li>
                <li className="list-unstyled">
                  <a href="http://localhost:3000/contact">Contact</a>
                </li>
                <li className="list-unstyled">
                  <a href="http://localhost:3000/help">Help</a>
                </li>
                <li className="list-unstyled">
                  <a href="http://localhost:3000/aboutus">About Us</a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
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
