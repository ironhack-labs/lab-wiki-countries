import React from 'react';
import './App.css';
// import Home from './components/Home';
import CountriesList from './components/CountriesList';
import CountryDetail from './components/CountryDetail';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <CountriesList />

      <Switch>
        <Route exact path="/countries/:cca3" component={CountryDetail} />
      </Switch>
    </div>
  );
}

export default App;
