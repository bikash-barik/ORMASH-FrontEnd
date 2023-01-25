import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
// import LandingPage from "../Pages/LandingPage";
import LandingPage from "../components/Application/LoginScreen/LoginScreen";
import Header from "../components/Application/LandingPage/Header";

const AppRouter = () => {
  return (
    <>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={LandingPage} />
        </Switch>
      </Router>
    </>
  );
};

export default AppRouter;
