import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import countries from '../countries.json';

function CountryDetails(props) {
  const [state, setState] = useState({
    name: '',
    capital: '',
    area: '',
    borders: [],
  });

  useEffect(() => {
    countries.forEach((country) => {
      if (country.name.common === props.match.params.country) {
        setState(country);
      }
    });
  }, [props]);

  return (
    <div className="content col-7">
      <h2 className="col-7 font-weight-light">
        <strong> {state.name.common}</strong>
      </h2>
      <table class="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{state.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>{state.area} km²</td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {state.borders.map((border) => (
                  <li>
                    <Link>{border}</Link>
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
