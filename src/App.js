import React from 'react';
import {Switch, Route} from 'react-router-dom'

//Components 
import CountriesList from './components/CountriesList';
import CountryDetail from './components/CountryDetail'

export default function App() {
  return (
    <div className="App">
          <Switch>
          <Route exact path="/" component={CountriesList} />
          <Route path="/:cca3" component={CountryDetail} />
      </Switch>
    </div>
  );
}