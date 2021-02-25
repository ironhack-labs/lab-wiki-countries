import React from 'react';

function CountryDetails(props) {
  const { country } = props.location.state;
  console.log(country);

  // const countryId = props.match.params.countryId;
  // const country = [].find((countryObj) => countryObj.alpha3Code === countryId);
  return (
    <div className="col-7">
      <h1>{country.name}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{country.capital}</td>
          </tr>

          <tr>
            <td>Flags</td>
            <td>
              <img width="30px" src={country.flag} alt="flag" />
            </td>
          </tr>
          <tr>
            <td style={{ width: '30%' }}>Currency</td>
            <td>{country.currencies[0].name}</td>
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
