import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Dashboard from "./containers/Dashboard/index";
import Login from "./containers/Login/index";
import SigninLayout from "../src/components/Layouts/SigninLayout";
import PrivateLayout from "../src/components/Layouts/PrivateLayout";
function App() {
  return (
    <Router>
      <Switch>
        <PrivateLayout exact path="/" component={Dashboard} />
        <SigninLayout exact path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
