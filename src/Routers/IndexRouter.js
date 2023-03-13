import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import AppRouter from "./AppRouter";
import Home from "../Pages/UserEnd/Home";
import NotFound from "../Pages/NotFound";

const IndexRouter = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path={["/", "/Home", "/home"]} component={Home} />
          {/* <Redirect to="/error404-Page-Not-Found" /> */}

          <AppRouter />
          
          {/* <Route component={NotFound} /> */}
        </Switch>
      </Router>
    </>
  );
};

export default IndexRouter;
