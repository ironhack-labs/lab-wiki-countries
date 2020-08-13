import React from 'react';
import './App.css';
import CountriesList from './components/CountriesList'
import { Switch, Route } from 'react-router-dom';
import CountryDetail from './components/CountryDetail'


function App() {
  return (

    <div className="App">
     <div>
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <a className="navbar-brand" href="/">WikiCountries</a>
        </div>
      </nav>
      <div className="container">
        <div className="row">
            <CountriesList/>
            <Switch>
               <Route exaxct path= '/:cca3' component={CountryDetail}/>
            </Switch>
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
