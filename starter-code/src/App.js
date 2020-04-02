import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';
import countries from './countries.json'
import CountryDetail from './components/CountryDetail';

function App() {
  return (
    <div>
      <div>
        <h1 className="bg-primary">WikiCountries</h1>
      </div>
      <div className="Container">
        <div className="row">
          <div className="col-5" style={{ maxHeight: "90vh", overflow: "scroll" }} >
            <Navbar countries={countries} />
          </div>
          <div className="col-7">
            <Switch>
              <Route exact path='/:id' component={CountryDetail} something="fafasd" />
            </Switch>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
