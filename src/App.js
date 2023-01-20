import "./App.css";
import SideMenu, { menuItems } from "./components/SideMenu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';





import React from 'react'
import Hubrouters from "./Routers/Hubrouters";
import LandingPage from "./Pages/LandingPage";
import IndexRouter from "./Routers/IndexRouter";




function App() {
  return (
    <>
    <Router >
      <Switch>
      {/* <Route path="/" component={HomeRouter} /> */}
      <Route path="/hub" component={Hubrouters} />
      

       <IndexRouter/>
      </Switch>
    </Router>
      
    </>

  );
}

export default App;

