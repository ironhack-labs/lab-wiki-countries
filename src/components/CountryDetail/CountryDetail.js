import React from 'react';
import { CountriesList } from '../CountriesList/CountriesList';
import { Link } from 'react-router-dom';

const CountryDetails = (props) => {
  let getCountry = (id) => CountriesList.find((obj) => obj.id === id);

  const { params } = props.match;

  const foundCountry = getCountry(params.id);

  return (
    <div>
      <div class="col-7">
        <h1>{foundCountry.name}</h1>
        <table class="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style="width: 30%;">Capital</td>
              <td>{foundCountry.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {foundCountry.area}
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  <li>
                    <a href="/AND">Andorra</a>
                  </li>
                  <li>
                    <a href="/BEL">Belgium</a>
                  </li>
                  <li>
                    <a href="/DEU">Germany</a>
                  </li>
                  <li>
                    <a href="/ITA">Italy</a>
                  </li>
                  <li>
                    <a href="/LUX">Luxembourg</a>
                  </li>
                  <li>
                    <a href="/MCO">Monaco</a>
                  </li>
                  <li>
                    <a href="/ESP">Spain</a>
                  </li>
                  <li>
                    <a href="/CHE">Switzerland</a>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CountryDetails;
