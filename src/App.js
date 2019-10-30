import React from "react";
import classes from "./App.css";
import Auth from "./containers/Auth/Auth";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className={classes.App}>
      <Route path="/" exact component={Auth} />
    </div>
  );
}

export default App;
