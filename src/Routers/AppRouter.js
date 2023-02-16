import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
// import LandingPage from "../Pages/LandingPage";
import LandingPage from '../components/Application/LoginScreen/LoginScreen';
import RegisterScreen from '../components/Application/RegisterScreen/RegisterScreen';
// import Header from '../components/Application/LandingPage/Header';
import Home from '../Pages/UserEnd/Home';

const AppRouter = () => {
  return (
    <>
      <Router>
        {/* <Header/> */}
        <Switch>
          <Route exact path='/' component={Home}  />
          <Route exact path='/Login' component={LandingPage} />
          <Route path='/register' component={RegisterScreen} />
        </Switch>
      </Router>
    </>
  );
};

export default AppRouter;
