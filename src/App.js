import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar';
import data from './countries.json';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="App">
        <Navbar />

        <div className="container">
          <div className="row">
            <CountriesList />
            <Switch>
            {/* <Route exact path="/countries" component={CountriesList}/> */}
            <Route exact path="/countries/:cca3" component={CountryDetails}></Route>
            </Switch>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
