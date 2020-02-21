import React from "react";
import { Route, Redirect } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

export default function Routes() {
  return (
    <div>
      <Route exact path="/" render={() => <Redirect to="/home" />} />
      <Route path="/signup" component={SignUp} />
    </div>
  );
}
