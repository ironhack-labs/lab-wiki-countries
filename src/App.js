import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import CountriesList from './components/CountriesList';
import {Switch, Route} from 'react-router-dom'
import CountryDetail from './components/CountryDetail'

function App() {
  return (
    <div className="App">
          <Switch>
          <Route exact path="/" component={CountriesList} />
          <Route path="/:cca3" component={CountryDetail} />
      </Switch>
    </div>
  );
}

export default App;
