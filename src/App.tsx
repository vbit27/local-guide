import React, { useState } from 'react';
import './App.css';
import Explore from './Explore/Explore';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './shared/Header';
import Info from './Info/Info';
import Footer from './shared/Footer';

function App() {
  return (
    <Router>
      <Header />
      <div>
        <Switch>
          <Route exact path="/">
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
