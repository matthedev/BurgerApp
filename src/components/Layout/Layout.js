import React, { Component } from "react";
import Aux from "../../hoc/Auxillary";
import "../../Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  sideDrawerSwitch = () => {
    this.setState({ showSideDrawer: !true });
  };

  sideDrawerHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.drawerSwitcher };
    });
  };

  render() {
    return (
      <Aux>
        <Toolbar clicked={this.sideDrawerHandler} />
        <SideDrawer
          clicked={this.sideDrawerSwitch}
          open={this.state.showSideDrawer}
        />
        <main className="Content">{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
