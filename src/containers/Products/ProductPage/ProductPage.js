import React, { Component } from "react";
import { MDBCol } from "mdbreact";
import classes from "./ProductPage.css";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";
import { Redirect } from "react-router-dom";

class ProductPage extends Component {
  state = {
    info: []
  };

  constructor(props) {
    super(props);

    if (props.productInfo) {
      const info = props.productInfo;
      const result = Object.keys(info).map(key => info[key]);

      this.state = { info: result };
    } else {
      this.state = { info: null };
    }
  }

  componentDidMount() {
    console.log(this.state.info);
    this.props.onSetProductInfoToNull();
  }

  render() {
    let page = null;

    if (this.state.info) {
      page = (
        <div className={classes.body}>
          <div className={[classes.Row, `row`].join(" ")}>
            <MDBCol md="12" className={classes.Product}>
              <div className={[classes.Row, "row"].join(" ")}>
                <div className={["col-md-6", classes.evenlySpaced].join(" ")}>
                  <div className={classes.Img}>
                    <h3>Image</h3>
                  </div>
                </div>
                <div className={["col-md-6"].join(" ")}>
                  <div>
                    <h3>{this.state.info[1]}</h3>
                  </div>
                  <div>
                    <h3>{this.state.info[5]["name"]}</h3>
                  </div>
                  <div>
                    <h3>${this.state.info[2]}</h3>
                  </div>
                  <div>
                    <div className={classes.row}>
                      <button className={classes.Button}>-</button>
                      <h6>Quantity: 1</h6>
                      <button className={classes.Button}>+</button>
                    </div>
                  </div>
                  <div>
                    <button className="btn btn-success">Add to Cart</button>
                  </div>
                </div>
                <div className={["col-md-12"].join(" ")}>
                  <div className={["col-md-6", classes.evenlySpaced].join(" ")}>
                    <h4>Features</h4>
                  </div>
                </div>
                <div className={["col-md-12", classes.flexStart].join(" ")}>
                  <div className={["col-md-6", classes.evenlySpaced].join(" ")}>
                    <h4>description</h4>
                  </div>
                </div>
              </div>

              <MDBCol md="2"></MDBCol>
            </MDBCol>
          </div>
        </div>
      );
    }

    let redirectTo = null;

    if (!page) {
      redirectTo = <Redirect to="/" />;
    }

    return (
      <div>
        {redirectTo}
        {page}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    productInfo: state.products.productInfo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSetProductInfoToNull: () => dispatch(actions.setProductInfoToNull())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductPage);
