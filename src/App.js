import React, { Component } from 'react'
import Navbar from '../src/components/Navbar/Navbar'
import CountriesList from './components/CountriesList/CountriesList';

import { Route } from 'react-router-dom';
import CountryDetails from './components/CountryDetails/CountryDetails';

class App extends Component {

  state = {
    currentCountry: {}
  }

  render() {

    return (
      <div className="App" >
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-5">
              <CountriesList />
            </div>
            <Route path='/:country' render={(props) => <CountryDetails {...props} />} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
