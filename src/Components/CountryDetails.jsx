import React from 'react';
import countriesJSON from '../countries.json';
import {Link} from 'react-router-dom'

const CountryDetails = (props) => {
  console.log(props.match.params.cca3);
  const foundCountry = countriesJSON.find((oneCountry) => {
    return oneCountry.cca3 === props.match.params.cca3;
  });
  return (
    <div className="col-7">
      {/* <pre>{JSON.stringify(props, null, 2)}</pre> */}
      <h1>{foundCountry.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{foundCountry.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {`${foundCountry.area}km`}
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {foundCountry.borders.map((toto) => {
                  return (
                    <li key={toto.cca3}>
                      <Link exact to={`/${toto}`}>{toto}</Link>
                    </li>
                  );
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetails;
