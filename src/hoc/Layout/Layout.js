import React, { Component } from "react";
import classes from "./Layout.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import { connect } from "react-redux";
import ShowMenu from "../../containers/ShowMenu/ShowMenu";
import Logo from "../../components/Logo/Logo";
import SearchBar from "../../containers/Home/SearchBar/SearchBar";
import Cart from "../../containers/User/Cart/Cart";
import { withRouter } from "react-router-dom";
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
    let header = (
      <div className={[classes.Row, `row`].join(" ")}>
        <div className="col-md-2">
          <Logo className={classes.Logo} />
        </div>
      </div>
    );

    if (
      this.props.location.pathname === "/" ||
      this.props.location.pathname === "/productpage" ||
      this.props.location.pathname === "/searchedProducts"
    ) {
      header = (
        <div className={[classes.Row, `row`].join(" ")}>
          <div className="col-md-2">
            <Logo className={classes.Logo} />
          </div>
          <div className="col-md-8">
            <SearchBar className={classes.SearchBar} />
          </div>
        </div>
      );
    }

    if (this.props.isAuthenticated) {
      header = (
        <div className={[classes.Row, `row`].join(" ")}>
          <div className="col-md-11">
            <Logo className={classes.Logo} />
          </div>

          {/* <div className="col-md-9"></div> */}

          <div className="col-md-1">
            <Cart className={classes.Cart} />
          </div>
        </div>
      );
    }

    if (
      (this.props.isAuthenticated && this.props.location.pathname === "/") ||
      this.props.location.pathname === "/productpage" ||
      this.props.location.pathname === "/searchedProducts"
    ) {
      header = (
        <div className={[classes.Row, `row`].join(" ")}>
          <div className="col-md-2">
            <Logo className={classes.Logo} />
          </div>
          <div className="col-md-8">
            <SearchBar className={classes.SearchBar} />
          </div>
          <div className="col-md-1">
            <Cart className={classes.Cart} />
          </div>
        </div>
      );
    }

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
        {header}

        <div className={[classes.Row, `row`].join(" ")}>
          <div className={["col-md-2"].join(" ")}>
            <ShowMenu />
          </div>
          <div className={["col-md-10"].join(" ")}>
            <main className={classes.Main}>{this.props.children}</main>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

export default connect(mapStateToProps)(withRouter(Layout));
