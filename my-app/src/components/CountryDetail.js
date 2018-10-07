import React, {Component} from 'react';
import {Link} from "react-router-dom";

class CountryDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
      
  }
  
  printCountries(code) {
    let allCountries = this.props.allCountries;

    return allCountries.find(e => code === e.cca3).name.common
  }

  
  
  render() {
    
    const country = this.props.country;
    // console.log(countries)
    return (
      <div class="col-8">
        <h3>{country.name.common}</h3>
        <h4><strong>Capital:</strong> {country.capital}</h4>
        <ul>
        { country.borders.map((e, i) => {
            return (
              <li key={i}><Link to={`/country/${e}`}>{this.printCountries(e)}</Link></li>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default CountryDetail;