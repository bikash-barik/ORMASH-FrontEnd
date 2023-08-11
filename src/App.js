import './index.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Style/AllCss.css';
import './Style/style.css';
import './App.css';

import React from 'react';
import Hubrouters from './Routers/Hubrouters';
import UserHubrouters from './Routers/UserHubrouters';
import IndexRouter from './Routers/IndexRouter';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/user" component={UserHubrouters} />
          <Route path='/hub' component={Hubrouters} />
          
          <IndexRouter />
          
        </Switch>
      </Router>
    </>
  );
}

export default App;

// "start": "export SET NODE_OPTIONS=--openssl-legacy-provider && react-scripts start",  .. new Bikash
// "build": "export SET NODE_OPTIONS=--openssl-legacy-provider && react-scripts build"


