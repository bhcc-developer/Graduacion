import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Public from './Routes/Public';
import Protected from './Routes/Protected';
import Home from './Pages/Home';
import Login from './Pages/Login';
import PagesRol from './Pages/PagesRol';
import Page404 from './Pages/Page404';

import Header from './Organisms/Header';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Protected path="/" exact component={Home} isRol={true} />
        <Protected path="/pato" exact component={Home} isRol={false} />

        <Public path="/login" exact component={Login} />

        <Route path="/segurity" exact component={PagesRol} />
        
        <Route component={Page404} />

      </Switch>
    </Router>
  );
}

export default App;
