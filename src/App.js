import React from 'react';
import './App.css';
import CountriesList from './components/CountriesList';
import { Switch, Route } from 'react-router-dom';
import CountryDetail from './components/CountryDetail';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Switch>
          <Route exact path="/" component={CountriesList} />
          <Route path="/:id" component={CountryDetail} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
