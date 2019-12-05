import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import CountryDetail from './components/CountryDetail';
import Navbar from './components/Navbar';
import CountryList from './components/CountryList';
import countries from './countries.json';

console.log('HERERERERER', countries);

function App() {

  return (
    <div className="App">
      <Navbar />

      <div className="mainContainer">
        <CountryList countries={countries}/>
        <Switch>
          <Route exact path="/countrydetail/:country" component={CountryDetail} />
        </Switch>
      </div>

    </div>
  );
}

export default App;
