import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import countries from './../countries.json';
//import CountryDetails from './CountryDetails'

class CountriesList extends Component {
  state = {
    countries: countries,
  };
  render() {
    
    return (
      
      <div className="col-5">
          <div className="list-group">
        
        {this.state.countries.map((country) => {
          return (
            <div  key={country.cca3}
              className="list-group-item list-group-item-action">
            
              <Link to={`/${country.cca3}`}>
              {console.log ("country.cca3: ",country.cca3)}
                <h4>{country.flag}{country.name.common}</h4>
              </Link>
              </div> 

              

          );
        })}
        </div>
      </div>
    );
  }
}

export default CountriesList;
