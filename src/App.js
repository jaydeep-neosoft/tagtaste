import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./containers/Dashboard/index";
import Login from "./containers/Login/index";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
