import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLoggedIn } from "./utils";

const SigninLayout = (props) => {
  return !isLoggedIn() ? (
    <React.Fragment>
      <Route {...props} />
    </React.Fragment>
  ) : (
    <Redirect to="/" />
  );
};

export default SigninLayout;
