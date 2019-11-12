import React, { Component } from "react";
import classes from "./Layout.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import { connect } from "react-redux";
import ShowMenu from "../../containers/ShowMenu/ShowMenu";
import Logo from "../../components/Logo/Logo";
import SearchBar from "../../containers/Home/SearchBar/SearchBar";
import Footer from "../../components/Navigation/NavigationItems/Footer/Footer";
class Layout extends Component {
  state = {
    showSideDrawer: false
  };

  sideDrawerClosed = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <div>
        <div className={classes.Content}>
          {/* <div>Toolbar, SideDrawer, Backdrop</div> */}
          <Toolbar
            authenticated={this.props.isAuthenticated}
            drawerToggleClicked={this.sideDrawerToggleHandler}
          />
          <SideDrawer
            open={this.state.showSideDrawer}
            closed={this.sideDrawerClosed}
            authenticated={this.props.isAuthenticated}
          />
        </div>
        <div className={[classes.Row, `row`].join(" ")}>
          <div className="col-md-2">
            <Logo className={classes.Logo} />
          </div>
          <div className="col-md-8">
            <SearchBar className={classes.SearchBar} />
          </div>
        </div>

        <div className={[classes.Row, `row`].join(" ")}>
          <div className={["col-md-2"].join(" ")}>
            <ShowMenu />
          </div>
          <div className={["col-md-10"].join(" ")}>
            <main className={classes.Main}>{this.props.children}</main>
          </div>

          {/* <div className={["col-md-2"].join(" ")}>
            {!this.props.isAuthenticated ? (
              <MDBBtn color="light-green" onClick={this.signupBtnHandler}>
                SIGN UP
              </MDBBtn>
            ) : null}
          </div> */}
        </div>
        {/* <div>
          <Footer />
        </div> */}
        {/* <main className={classes.Main}>{this.props.children}</main> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

export default connect(mapStateToProps)(Layout);
