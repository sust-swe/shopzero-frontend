import React, { Component } from "react";
import classes from "./Layout.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import { connect } from "react-redux";

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
        <main className={classes.Main}>{this.props.children}</main>
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
