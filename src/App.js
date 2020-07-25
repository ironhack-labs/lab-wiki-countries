import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetail from './components/CountryDetail';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <div className="container">
          <div className="row">
            <div
              className="col-5"
              style={{ 'max-height': '90vh', overflow: 'scroll' }}
            >
              <CountriesList />
            </div>
            <div className="col-7">
              <Switch>
                <Route exact path="/">
                  <p>Selecciona un país</p>
                </Route>

                <Route
                  path="/:countrycode"
                  render={(props) => <CountryDetail {...props} />}
                />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
