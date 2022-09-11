import React from 'react';
import { useParams } from 'react-router-dom';

export const CountryDetails = ({ countryArr }) => {
  let { id } = useParams();

  const country = countryArr.filter((elem) => {
    return elem.alpha3Code === id;
  });

  return (
    <div className="col-7">
      <h1>Name</h1>
      <div>{country[0].name.common}</div>
      <tr>
        <td>Capital</td>
        <td>
          {country[0].capital.map((border) => (
            <td>{border}</td>
          ))}
        </td>
        <td>Paris</td>
      </tr>
      <tr>
        <td>Area</td>
        <td>{country[0].area}</td>
      </tr>
    </div>
  );
};

export default CountryDetails;
