import React, { useState } from 'react';
import './App.css';
import Explore from './Explore/Explore';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './shared/Header';
import Info from './Info/Info';

function App() {
  const [showMap, setShowMap] = useState<boolean>(true);
  console.log({ showMap });

  return (
    <Router>
      <Header setShowMap={(status: boolean) => setShowMap(status)} />
      <div>
        <Switch>
          <Route exact path="/">
            <Explore showMap={showMap} />
          </Route>
          <Route exact path="/info" component={Info} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
