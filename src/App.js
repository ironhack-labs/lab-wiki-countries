import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Link, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <NavBar/>
      <div className="row">
        <CountriesList/>

      <Switch>
        <Route exact path='/country/:id' component={CountryDetails}/>
      </Switch>
      </div>

    </div>
  );
}

export default App;
