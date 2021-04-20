import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './Navbar.js'
import CountriesList from './CountriesList';
import CountryDetails from './CountryDetails';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
        <Navbar/>
      
          <div className="container">
            <div className="row">
              <div
                className="col-5"
                style={{ maxHeight: '90vh', overflow: 'scroll' }}
              >
                <CountriesList />
              </div>
              <div className="col-7">
                <Route path="/:cca3" component={CountryDetails} />
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;