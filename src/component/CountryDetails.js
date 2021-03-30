// import React from 'react';
import { Link } from 'react-router-dom';

const CountryDetails = (props) => {
  const { id } = props.match.params;

  const findCountryCode = (code) => {
    return props.countries.find((eachCountry) => eachCountry.cca3 === code);
  };

  const oneCountry = findCountryCode(id);

  return (
    <div style={{ width: '60%' }}>
      <h1>{oneCountry.name.common}</h1>
      <hr />
      <div>
        <span className="col-4">Capital:</span>
        <span className="col-8">{oneCountry.capital}</span>
      </div>
      <hr />
      Area: {oneCountry.area} km
      <hr />
      Borders:
      <ul>
        {oneCountry.borders.map((eachBorder) => {
          const borderCountry = findCountryCode(eachBorder);
          return (
            <li>
              <Link to={`/countries/${eachBorder}`}>
                {borderCountry.name.common}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CountryDetails;
