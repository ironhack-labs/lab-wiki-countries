import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import countries from '../../countries.json';
import './CountryDetails.css';

function CountryDetails(props) {
  const [state, setState] = useState({
    name: {},
    flag: '',
    cca2: '',
    capital: '',
    area: '',
    region: '',
    subregion: '',
    borders: [],
    languages: {},
  });

  useEffect(() => {
    countries.forEach((country) => {
      if (country.cca3 === props.match.params.country) {
        setState(country);
      }
    });
  }, [props]);

  function renderName(code) {
    let country = countries.find((elem) => elem.cca3 === code);
    return `${country.name.common}`;
  }

  return (
    <div className="col-7">
      <h1 className="text-primary">
        {state.flag} {state.name.common} - {state.cca2}
      </h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td className="tabledata text-primary font-weight-bold">Capital</td>
            <td>{state.capital}</td>
          </tr>
          <tr>
            <td className="text-primary font-weight-bold">Region</td>
            <td>{state.region}</td>
          </tr>
          <tr>
            <td className="text-primary font-weight-bold">Subregion</td>
            <td>{state.subregion}</td>
          </tr>
          <tr>
            <td className="text-primary font-weight-bold">Languages</td>
            <td>
              <ul className="list-unstyled">
                {Object.values(state.languages).map((elem, idx) => (
                  <li key={-idx}>{elem}</li>
                ))}
              </ul>
            </td>
          </tr>
          <tr>
            <td className="text-primary font-weight-bold">Area</td>
            <td>
              {state.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td className="text-primary font-weight-bold">Borders</td>
            <td>
              <ul>
                {state.borders.map((country, idx) => (
                  <li key={idx}>
                    <Link to={`/countries/${country}`}>
                      {renderName(country)}
                    </Link>
                  </li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;
