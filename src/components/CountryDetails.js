import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const CountryDetails = (props) => {
  const { alpha3Code } = useParams();

  const details = props.countries.find((country) => {
    return country.alpha3Code === alpha3Code;
  });

  const renderBorder = () => {
    return (
      <ul>
        {details.borders.map((border) => {
          return (
            <li key={border}>
              <Link to={'/' + border}>{border}</Link>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div className="col-7">
      <h1>{details.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td>Capital</td>
            <td>{details.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {details.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              {details.borders.length > 0 ? (
                renderBorder()
              ) : (
                <p>{details.name.common} has got no borders!</p>
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetails;
