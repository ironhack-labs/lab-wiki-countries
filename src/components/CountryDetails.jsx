import React from 'react';
import { useParams, Link } from 'react-router-dom';

const CountryDetails = ({ countriesData }) => {
  const params = useParams();
  const country = countriesData.find((country) => {
    return country.alpha3Code === params.id;
  });
  return (
    <div className="col-7">
      <h1>
        {country.name.common}{' '}
        <img
          src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
        />
      </h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{country.capital[0]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {`${country.area} km`}
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {country.borders.map((alpha3Code) => {
                  const borderCountry = countriesData.find((country) => {
                    return country.alpha3Code === alpha3Code;
                  });
                  return (
                    <li key={alpha3Code}>
                      <Link to={`/${alpha3Code}`}>
                        {borderCountry.name.common}
                      </Link>
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
};

export default CountryDetails;
