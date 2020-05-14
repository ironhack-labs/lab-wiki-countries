import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CountriesList from './components/CountriesList';
import CountryDetail from './components/CountryDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <CountriesList /> 
          {/* <h1>hellllooooooooooooooo</h1> */}
          {/* <Route path="/countries-list" component={CountriesList} /> */}
        <Switch>
          <Route path="/country-details/:cca3" component={CountryDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
