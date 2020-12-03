import React from 'react';
import countriesInfo from '../countries.json';

function CountryDetails(props) {
  const id = props.match.params.id;

  const myCountry = countriesInfo.find((item) => item.cca3 === id);
  console.log(myCountry);

  return (
    <div className="col-7">
      <h1>{myCountry.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{myCountry.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {myCountry.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {myCountry.borders.map((item) => {
                  return <li>{item}</li>;
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;
