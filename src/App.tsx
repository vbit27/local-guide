import React from 'react';
import './App.css';
import Explore from './Explore/Explore';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Header from './shared/Header';
import Info from './Info/Info';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Explore} />
          <Route exact path="/info" component={Info} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
