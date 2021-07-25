import countries from '../countries.json';

import React, { Component } from 'react';
import Countrieselement from './Countrieselement';
import 'bootstrap/dist/css/bootstrap.css';

class Countrieslist extends Component {
  state = {
    countries,
  }
  render() {
    
    return (
      <ul className="list-group">
      
        {this.state.countries.map((element) => <Countrieselement codeCountry={element.cca3} flag={element.flag} t listcountries ={element.name.official}/>)}
      </ul>
    );
  }
}

export default Countrieslist 
