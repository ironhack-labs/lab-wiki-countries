import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import CountriesList from '../countries.json';

function CountryDetails(props) {
  const [state, setState] = useState({
    cca3: '',
    name: '',
    capital: '',
    area: '',
    borders: [],
  });

  useEffect(() => {
    CountriesList.forEach((country) => {
      if (country.cca3 === props.match.params.cca3) {
        setState(country);
      }
    });
  }, [props]);
  return (
    <Route>
      <div>
        <div className="col-7">
          <h1>{state.name}</h1>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td>Capital</td>
                <td>{state.capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {state.area} km
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    <li>
                      <a href="/AND">{state.borders}</a>
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Route>
  );
}

export default CountryDetails;
