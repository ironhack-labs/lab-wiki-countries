import React from 'react';
import data from './countries.json';
import { Link } from 'react-router-dom';

const Countries = () => {
  return (
    <div>
      <h1>Here is the list of countries</h1>
      {data.map((country) => {
        return (
          <div key={country.id}>
            <table class="table">
              <tbody>
                <tr>
                  <td>
                    <Link to={`/countries/${country.name.official}`}>
                      {country.name.official}
                    </Link>
                    {country.flag}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
};

export default Countries;
