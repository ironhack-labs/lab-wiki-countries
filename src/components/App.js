import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

import Navbar from './Navbar';
import CountriesList from './countries/CountriesList';
import CountryDetails from './countries/CountryDetails';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar exat path="/" />
        <div className="container">
          <div className="row">
            <div
              className="col-5"
              style={{ maxHeight: '90vh', overflow: 'scroll' }}
            >
              <Switch>
                <Route exat path="/country" component={CountriesList} />
                <Route path="/country/:cca3" component={CountryDetails} />
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
