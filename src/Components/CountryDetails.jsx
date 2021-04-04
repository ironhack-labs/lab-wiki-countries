import React from 'react';
import './CountriesDetails.css'
import countriesJSON from '../countries.json';
import { Link } from 'react-router-dom';

const CountryDetails = (props) => {
  const countryID = props.match.params.id; 
  const selectedCountry = countriesJSON.find(country => country.cca3 === countryID);
  const selectedCountryBorders = selectedCountry.borders;
  console.log(selectedCountryBorders);

  return (
    <div className="country-details">
      <div className="list-group">
        <h1 className="text-primary">{selectedCountry.name.common}</h1>
        <div className="list-group-item">
          Capital<span>{selectedCountry.capital}</span>
        </div>
        <div className="list-group-item">
          Area<span>{selectedCountry.area}km<sup>2</sup></span>
        </div>
        <div className="list-group-item">
          Borders<span>
            <ul>
              {selectedCountry.borders.map(border => { 
                const borderName = countriesJSON.find(country => country.cca3 === border);
                console.log(borderName);
                return <li key={border}><Link to={`/${border}`}>{borderName.name.common}</Link></li>;
              }
              )}
            </ul>
          </span>
        </div>
      </div>
    </div>
  )
};

export default CountryDetails;