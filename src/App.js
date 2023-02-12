import './index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Style/AllCss.css';
import './Style/style.css';
import './App.css';

import React from 'react';
import Hubrouters from './Routers/Hubrouters';
import IndexRouter from './Routers/IndexRouter';

function App() {
  return (
    <>
      <Router>
        <Switch>
          {/* <Route path="/" component={HomeRouter} /> */}
          <Route path='/hub' component={Hubrouters} />

          <IndexRouter />
        </Switch>
      </Router>
    </>
  );
}

export default App;

// "start": "export SET NODE_OPTIONS=--openssl-legacy-provider && react-scripts start",
// "build": "export SET NODE_OPTIONS=--openssl-legacy-provider && react-scripts build"

// "proxy": "http://127.0.0.1:5000",

// "proxy": "http://18.223.134.153:5000",
