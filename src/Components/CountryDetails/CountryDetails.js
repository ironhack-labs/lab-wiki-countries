import React, { useState, useEffect } from 'react';
import countries from '../../countries.json';
import { Link } from 'react-router-dom';

const CountryDetails = (props) => {
  const [state, setState] = useState({
    cca3: '',
    name: [{}],
    capital: '',
    area: 0,
    borders: [],
  });

  useEffect(() => {
    console.log(props);
    countries.forEach((country) => {
      if (country.cca3 === props.match.params.cca3) {
        setState(country);
      }
    });
  }, [props]);

  return (
    <div className="col-7">
      <h1>{state.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
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
                {state.borders.map((border) => (
                  <li>
                    <Link to={`/${border}`}>
                      {
                        countries.find((country) => country.cca3 === border)
                          .name.common
                      }
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
};

export default CountryDetails;
