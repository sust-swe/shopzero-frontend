import React, { Component } from "react";
import { MDBRow, MDBCol } from "mdbreact";
import ShowMenu from "../../ShowMenu/ShowMenu";
import classes from "./ProductPage.css";
import Logo from "../../../components/Logo/Logo";
import SearchBar from "../../Home/SearchBar/SearchBar";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";

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
    let page = (
      <div>
        <div className={[classes.Row, `row`].join(" ")}>
          <div className="col-md-2">
            <Logo />
          </div>
          <div className="col-md-8">
            <SearchBar />
          </div>
        </div>

        <MDBRow>
          <MDBCol md="2">
            <ShowMenu />
          </MDBCol>

          <MDBCol md="10" className={classes.Product}>
            <MDBRow>
              <MDBCol>
                <h3>Image</h3>
              </MDBCol>
              <MDBCol>
                <MDBCol>
                  <h3>name</h3>
                </MDBCol>
                <MDBCol>
                  <h3>brand</h3>
                </MDBCol>
                <MDBCol>
                  <h3>price</h3>
                </MDBCol>
                <MDBCol>
                  <h3>qty</h3>
                </MDBCol>
                <MDBCol>
                  <h3>cart</h3>
                </MDBCol>
              </MDBCol>
            </MDBRow>
            <MDBCol>
              <h3>features</h3>
            </MDBCol>
            <MDBCol>
              <h3>description</h3>
            </MDBCol>
          </MDBCol>
        </MDBRow>
      </div>
    );

    if (this.state.info) {
      let page = (
        <div>
          <div className={[classes.Row, `row`].join(" ")}>
            <div className="col-md-2">
              <Logo />
            </div>
            <div className="col-md-8">
              <SearchBar />
            </div>
          </div>

          <MDBRow>
            <MDBCol md="2">
              <ShowMenu />
            </MDBCol>

            <MDBCol md="10" className={classes.Product}>
              <MDBRow>
                <MDBCol>
                  <h3>Image</h3>
                </MDBCol>
                <MDBCol>
                  <MDBCol>
                    <h3>{this.state.info[1]}</h3>
                  </MDBCol>
                  <MDBCol>
                    <h3>brand</h3>
                  </MDBCol>
                  <MDBCol>
                    <h3>{this.state.info[2]}</h3>
                  </MDBCol>
                  <MDBCol>
                    <h3>qty</h3>
                  </MDBCol>
                  <MDBCol>
                    <h3>cart</h3>
                  </MDBCol>
                </MDBCol>
              </MDBRow>
              <MDBCol>
                <h3>features</h3>
              </MDBCol>
              <MDBCol>
                <h3>description</h3>
              </MDBCol>
            </MDBCol>
          </MDBRow>
        </div>
      );
    }

    return page;
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
