import React, { useState } from 'react';
import './App.css';
import Explore from './Pages/Explore/Explore';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home/Home';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme';
import { Header } from './components/Header/Header';

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
          </Switch>
        </div>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
