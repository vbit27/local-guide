import React, { useState } from 'react';
import './App.css';
import Explore from './Explore/Explore';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './shared/Header';
import Info from './Info/Info';
import Footer from './shared/Footer';
import Home from './Home/Home';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </Router>
  );
}

export default App;
