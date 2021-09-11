import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { LogIn } from './components/LogIn';
import { Signup } from './components/Signup';
import { Watchlist } from './components/Watchlist';
import { Watched } from './components/Watched';
import { Add } from './components/Add';
import { Watching } from './components/Watching';
import axios from 'axios';
import './App.css';
import './lib/font-awesome/css/all.min.css';

import { AuthProvider } from './context/AuthContext';
import { GlobalProvider } from './context/GlobalState';

axios.defaults.headers.post = {
  'Content-Type': 'application/json',
};

function App() {
  return (
    <AuthProvider>
      <GlobalProvider>
        <Router>
          <Header />

          <Switch>
            <Route exact path="/">
              <Watchlist />
            </Route>

            <Route exact path="/login">
              <LogIn />
            </Route>

            <Route exact path="/signup">
              <Signup />
            </Route>

            <Route exact path="/watchlist">
              <Watchlist />
            </Route>

            <Route exact path="/watching">
              <Watching />
            </Route>

            <Route exact path="/watched">
              <Watched />
            </Route>

            <Route exact path="/add">
              <Add />
            </Route>
          </Switch>
        </Router>
      </GlobalProvider>
    </AuthProvider>
  );
}

export default App;
