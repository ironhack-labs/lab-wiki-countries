import React from 'react';
import list from '../countries.json';
import { Link } from 'react-router-dom';

function CountryDetails(props) {
  const getName = (country) => {
    const found = list.find((countryName) => countryName.cca3 === country);
    return found.name.official;
  };

  const getDetails = (countryInfo) => {
    const details = list.find((info) => info.cca3 === props.match.params.cca3);

    switch (countryInfo) {
      case 'countryName':
        return details.name.official;
      case 'capital':
        return details.capital;
      case 'area':
        return details.area;
      case 'borders':
        return details.borders;
      case 'cca3':
        return details.cca3;
    }
  };

  return (
    <div className="col-7">
      <h1>{getDetails('countryName')}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{getDetails('capital')}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {getDetails('area')}
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {getDetails('borders').map((border) => {
                  return (
                    <li key={border}>
                      <Link to={`${border}`}> {getName(border)} /</Link>
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
}

export default CountryDetails;
