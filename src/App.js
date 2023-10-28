import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

// imported components
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Settings from './pages/Settings/Settings';
import Feedback from './pages/Feedback/Feedback';
import Ranking from './pages/Ranking/Ranking';

import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/home" component={ Home } />
        <Route path="/settings" component={ Settings } />
        <Route path="/feedback" component={ Feedback } />
        <Route path="/ranking" component={ Ranking } />
      </Switch>
    </BrowserRouter>
  );
}