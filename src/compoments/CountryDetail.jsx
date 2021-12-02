import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

export const CountryDetail = (props) => {
  const getCountryByCode = (code) =>
    props.countries.find((c) => c.alpha3Code === code);

  const getFlagEmoji = (countryCode) =>
    String.fromCodePoint(
      ...[...countryCode.toUpperCase()].map((x) => 0x1f1a5 + x.charCodeAt())
    );

  const params = useParams();
  const country = getCountryByCode(params.id);

  return (
    <div className="col-7">
      <h1 style={{ fontSize: 150 }}>{getFlagEmoji(country.alpha2Code)}</h1>
      <h1>{country.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{country.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {country.area} km <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul style={{ listStyleType: 'none' }}>
                {country.borders.map((b) => {
                  return (
                    <Link to={'/countries/' + b}>
                      <li>{getCountryByCode(b).name.common}</li>
                    </Link>
                  );
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
