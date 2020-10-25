import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import AppHome from "./container/appHome";
import Loader from "./components/loading/loading";

const Routes = () => (
  <Router>
    <>
      <Loader />
      <Route exact path="/" component={AppHome} />
    </>
  </Router>
);

export default Routes;
