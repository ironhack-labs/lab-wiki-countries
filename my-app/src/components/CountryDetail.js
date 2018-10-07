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

    return allCountries.find(e => code === e.cca3)
  }

  
  
  render() {
    
    const country = this.props.country;
    // console.log(countries)
    return (
      <div class="col-8">
        <h3 class="countryTitle">{country.name.common}</h3>
        <h5 class="capital"><strong>Capital:</strong> {country.capital}</h5>
        <h5 class="borders"><strong>Borders:</strong></h5>
        <ul class="borderList">

        { country.borders.map((e, i) => {
            return (
              <li key={i}><Link to={`/country/${e}`}>{this.printCountries(e).flag} {this.printCountries(e).name.common}</Link></li>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default CountryDetail;