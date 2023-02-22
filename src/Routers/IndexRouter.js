import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppRouter from "./AppRouter";
import Home from '../Pages/UserEnd/Home';

const IndexRouter = () => {
  return (
    <>
      <Router>
        <Switch>
        <Route exact path='/'  component={Home}  />
          <AppRouter />
        </Switch>
      </Router>
    </>
  );
};

export default IndexRouter;
