import React, { Component } from 'react';
import countries from '../data/countries.json';
import { Link } from 'react-router-dom';

class CountryDetails extends Component {

  getDetails = () => {
    const { params } = this.props.match;
    return (countries.filter(el => el.cca3 === params.cca3))[0];
  }

  render () {
    const country = this.getDetails();
    const borderingCountries = countries.filter(el => (country.borders.indexOf(el.cca3) !== -1));
    return (
      <div>
        <h1>{country.name.common}</h1>
        <div className="list-group-item list-group-item-action">Capital: {country.capital}</div>
        <div className="list-group-item list-group-item-action">Area: {country.area} km²</div>
        <div className="list-group-item list-group-item-action">
        Region: {country.region}<br/>
        Subregion: {country.subregion}
        </div>
        <div className="list-group-item list-group-item-action">
        Borders:
          <ul>
            {borderingCountries.map((el, i) => {
              return (
                <li key={i} style={{listStyle : 'none'}}>
                <Link to={`/details/${el.cca3}`}>{`${el.flag} ${el.name.common}`}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default CountryDetails;