import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import LandingPage from "../Pages/LandingPage";

const AppRouter = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
        </Switch>
      </Router>
    </>
  );
};

export default AppRouter;
