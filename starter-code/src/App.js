import React from 'react';
import logo from './logo.svg';
import './App.css';
import CountryList from './components/CountryList';
import CountryDetail from './components/CountryDetail'
import {Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <CountryList />
      
      <Switch>
      <Route path="/:cca3" component={CountryDetail} />
      </Switch>
    </div>
  );
}

export default App;
