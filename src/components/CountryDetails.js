import React from 'react';
// import countries from '../countries.json';

function CountryDetails(props) {
  const countryId = props.match.params.countryId;
  console.log(countryId);
  const country = countries.find(
    (countryObj) => countryObj.alpha3Code === countryId
  );

  console.log(country);

  return (
    <div className="col-7">
      <h1>{country.name.official}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{country.capital}</td>
          </tr>

          <tr>
            <td>Flags</td>
            <td>{country.flag}</td>
          </tr>
          <tr>
            <td style={{ width: '30%' }}>Currency</td>
            <td>{country.currency}</td>
          </tr>
          <tr>
            <td style={{ width: '30%' }}>Region</td>
            <td>{country.region}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;
