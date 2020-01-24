import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CountryDetail from './components/CountryDetail';
import { Switch, Route } from 'react-router-dom';

const App = () => (
  <div className="App">
    <Navbar />
    <Switch>
    <Route path="/:id" component={CountryDetail} />
    <Route component={CountryDetail} />
    </Switch>
  </div>
);

export default App;
