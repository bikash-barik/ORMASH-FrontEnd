import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppRouter from "./AppRouter";

const IndexRouter = () => {
  return (
    <>
      <Router>
        <Switch>
          <AppRouter />
        </Switch>
      </Router>
    </>
  );
};

export default IndexRouter;
