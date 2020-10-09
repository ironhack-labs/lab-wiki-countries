import React from 'react';
import BordersList from './BordersList';

const CountryDetails = ({ countries, filter, handleClick }) => {
  const country = countries.filter((c) => c.cca3 === filter)[0];

  return (
    <div className="country-details h-100 p-4">
      {!filter ? (
        <h4 className="text-left mt-0">Please select country</h4>
      ) : (
        <div>
          <h1 className="text-left mt-0">
            {country?.name.common} <br />
            <small>{country?.name.official}</small>
          </h1>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td>Capital</td>
                <td>{country?.capital[0]}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {new Intl.NumberFormat('es-ES').format(country?.area)} km
                  <sup>2</sup>
                </td>
              </tr>
              {country?.borders.length !== 0 && (
                <tr>
                  <td>Borders</td>
                  <td>
                    <BordersList
                      countries={countries}
                      borders={country?.borders}
                      handleClick={handleClick}
                    />
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CountryDetails;
