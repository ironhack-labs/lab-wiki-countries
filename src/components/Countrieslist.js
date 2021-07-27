

import React, { Component } from 'react';
import Countrieselement from './Countrieselement';
import 'bootstrap/dist/css/bootstrap.css';

class Countrieslist extends Component {
  
  render() {
    
    return (
      <ul className="list-group">
      
        {this.props.countries.map((element) => <Countrieselement codeCountry={element.cca3} flag={element.flag} t listcountries ={element.name.official}/>)}
      </ul>
    );
  }
}

export default Countrieslist 
