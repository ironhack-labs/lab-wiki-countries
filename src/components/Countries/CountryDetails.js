import React from 'react';

const CountryDetails = props => {

  const cca3 = props.match.params.cca3
  const selectedCountry = props.countries.find(country => country.cca3 === cca3)

  return (
    <>
      <div class="col-7">
        <h1>{selectedCountry.name.common}</h1>
        <table class="table">
          <thead></thead>
          <tbody>
            <tr>
              <td >Capital</td>
              <td>{selectedCountry.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {selectedCountry.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CountryDetails;
