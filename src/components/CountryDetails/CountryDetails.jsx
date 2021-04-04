import React from 'react';
import { Link } from 'react-router-dom';

const CountryDetails = (props) => {
  console.log(props.match.params.id);
  const countryId = props.match.params.id;
  console.log(countryId);

  const selectedCountry = props.countries.find(
    (country) => country.cca3 === countryId
  );
  const selectedCountryBorders = selectedCountry.borders;
  console.log(selectedCountry);

  console.log(selectedCountryBorders);

  return (
    <div>
      <div class="card" >
        <div class="card-body">
          <h1 class="card-titleMain">{selectedCountry.name.common}</h1>

          <h5 class="card-title">Capital: {selectedCountry.capital}</h5>
          <h5 class="card-title">Area: {selectedCountry.area}</h5>
          <h5 class="card-title">Borders:</h5>
          <ul>
            {selectedCountry.borders.map((border) => {
              const borderName = props.countries.find(
                (country) => country.cca3 === border
              );
              console.log(borderName);
              return (
                <li key={border}>
                  <Link to={`/${border}`}>{borderName.name.common}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
