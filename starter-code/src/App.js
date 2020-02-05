import React from 'react';
import './App.css';
import Navbar from './misc/Navbar';
import data from './data/countries.json'
import CountryDetail from './components/CountryDetail';
import CountryInfo from './components/CountryInfo.js';
import { Switch, Route } from 'react-router-dom';

const App = () => {
    return (
      <div className="App">
        <Navbar/>
        <div className="container mt-4 pt-4">
          <div className="row">
            <div className="col-5">
              <CountryDetail countries={data} />
            </div>

            <div className="col-7">
              <Switch>
                <Route exact path="/:countryCca3" component={CountryInfo}/>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    )
}

export default App;
