import React from "react";
import classes from "./App.css";
import Auth from "./containers/Auth/Auth";
import { Route, Switch } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import Home from "./containers/Home/Home";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/" exact component={Auth} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
