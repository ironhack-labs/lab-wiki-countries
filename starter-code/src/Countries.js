import React, { Component } from "react";
import Country from './Country';
import countries from './countries.json'

class Countries extends Component {


  render() {
    return (
      <div class="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
      <div className="list-group">
      {countries.map(country=> 
          <Country name={country.name.common} flag={country.flag} href={`/${country.cca3}`}/>
      )}
      </div>
      </div>
    );
  }
}

export default Countries;
