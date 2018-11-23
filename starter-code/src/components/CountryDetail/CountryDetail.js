import React from 'react';
import Borders from './Borders';

const CountryDetail = ({data, match}) => (
  <div className="col-7">
    {data
      .filter(country => country.cca3 === match.params.id)
      .map( (country, index) => (
        <div key={index}>
          <h1>{country.name.common}</h1>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td className="capital">Capital</td>
                <td>{country.capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>{country.area} km<sup>2</sup></td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    {country.borders.map( (cca3, index) => (
                      <Borders
                        key={index}
                        cca3={cca3}
                        data={data} />
                    ))}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ))
    }
  </div>
);

export default CountryDetail;