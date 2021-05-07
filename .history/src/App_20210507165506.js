import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails';
import Home from './components/Home/Home';
import countries from './countries.json';

//funcio
function App() {
  return (
    <div>
      <Navbar />
      <div>
        <CountriesList countries={this.state.countries} />
        <Switch>
          <Route exact path="/countries" component={Home} />
          <Route exact path="/:id" component={CountryDetails} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
