import React, { useState } from 'react';
import './App.css';
import Explore from './Explore/Explore';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './shared/Header';
import Info from './Info/Info';
import Footer from './shared/Footer';
import Home from './Home/Home';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/explore">
            <Explore />
          </Route>
          <Route exact path="/info" component={Info} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
