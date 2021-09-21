import React from 'react';
// import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Homepage } from './components/Homepage';
import { LogIn } from './components/LogIn';
import { Signup } from './components/Signup';
import { MainList } from './components/MainList';
import { Add } from './components/Add';
import axios from 'axios';
import './lib/font-awesome/css/all.min.css';

import { AuthProvider } from './contexts/AuthContext';

axios.defaults.headers.post = {
  'Content-Type': 'application/json',
};
axios.defaults.withCredentials = true;

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>

          <Route exact path="/login">
            <LogIn />
          </Route>

          <Route exact path="/signup">
            <Signup />
          </Route>

          <Route exact path="/:user/watchlist" children={<MainList mainListType="watchlist" />} />

          <Route exact path="/:user/watching" children={<MainList mainListType="watching" />} />

          <Route exact path="/:user/watched" children={<MainList mainListType="watched" />} />

          <Route exact path="/add" children={<Add />} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
