import React from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

const CountryDetails = (props) => {
  //   if (!props.country) {
  //     return <Redirect to="/" />;
  //   }
  return (
    <div className="col-7">
      <h1>{props.country.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>Capital: {props.country.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              551695 km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {props.country.borders.map((el) => (
                  <li>
                    <Link to={`/${el}`} onClick={() => props.changeCountry(el)}>
                      {el}
                    </Link>
                  </li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetails;
