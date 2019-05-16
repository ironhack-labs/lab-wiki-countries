import React, {Component, Fragment} from 'react';
import CountryDetail from './components/CountryDetail'
import AllCountries from './components/AllCountries'

import './App.css';
import { Switch, Route } from 'react-router-dom';
import countries from './countries.json'
import Navbar from './components/Navbar'

class App extends Component {
  state = {
    allCountries: countries
  }
  
  render() {
    return (
      
<Fragment>

      <Navbar />
      <AllCountries />
    
</Fragment>
    );
  }
}

export default App;
