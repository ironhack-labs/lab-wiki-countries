import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {ListCountries} from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Switch, Route } from 'react-router-dom';
import countries from './countries.json';

function App() {
  return (
    <>
    <div className="App">
    <Navbar/>
      <div className="container">
        <div className="row">
         <div className="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
          <div className="list-group">
            <ListCountries countries={countries}/>
          </div>
         </div>
        </div>
          <div className="info">
            <Switch>
              <Route exact path='/:cca3' component={CountryDetails}/>
            </Switch>
          </div>
      </div>
    </div>
    </>
  );
}

export default App;
