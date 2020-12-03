import React from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';

const CountryDetails = (props) => {
  const countryId = props.match.params.id;
  // console.log('countryId', countryId);

  const clickedCountry = countries.find((item) => {
    // console.log('clicked item', item);
    return item.cca3 === countryId;
  });

  console.log(clickedCountry);

  return (
    <div className="col-7">
      <h1>{clickedCountry.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{clickedCountry.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {clickedCountry.area}
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {clickedCountry.borders &&
                  clickedCountry.borders.map((border) => {
                    return <li>{border}</li>;
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
