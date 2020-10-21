import React, { Component } from "react";
import { Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/BurgerBuilder/checkout/Checkout";
import Orders from "./containers/BurgerBuilder/Orders/Orders";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Route path="/BurgerApp" exact component={BurgerBuilder} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/orders" component={Orders} />
        </Layout>
      </div>
    );
  }
}
export default App;
