import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import CountriesList from './components/CountriesList';
import countries from './countries.json'
import CountryDetails from './components/CountryDetails';
import 'bootstrap/dist/css/bootstrap.css';
import {Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className="container m-2">
        <div className="row">
          <CountriesList countries={countries}/>
          <Switch>
            <Route exact path="/:cca3" component={CountryDetails} />
          </Switch>
        </div>
      </div>

    </div>
  );
}

export default App;
