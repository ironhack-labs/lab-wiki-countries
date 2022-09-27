import React from 'react';
import { useParams, Link } from 'react-router-dom';

export default function CountryDetails({ countries }) {
  const { id } = useParams();
  const {
    name: { official: name },
    area,
    alpha2Code,
    borders,
    capital,
  } = countries.find(
    (country) => country.alpha3Code.toLowerCase() === id.toLowerCase()
  );

  return (
    <div className="col-7">
      <img
        style={{ height: '1em' }}
        src={`https://flagpedia.net/data/flags/icon/72x54/${alpha2Code.toLowerCase()}.png`}
      />
      <h1>{name}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {area} km
              <sup>2</sup>
            </td>
          </tr>
          {borders.length > 0 ? (
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {borders.map((border) => {
                    return (
                      <li key={border}>
                        <Link to={`/${border}`}>
                          {
                            countries.find((item) => {
                              return item.alpha3Code === border;
                            }).name.official
                          }
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </td>
            </tr>
          ) : (
            ''
          )}
        </tbody>
      </table>
    </div>
  );
}
