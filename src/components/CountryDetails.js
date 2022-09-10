import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import countriesData from '../countries.json';

const CountryDetails = () => {
  const { id } = useParams();

  const [countries, setCountries] = useState(countriesData);
  const [country, setCountry] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const country = countries.find((country) => country.alpha3Code === id);
      setCountry(country);
      setLoading(false);
    }
  }, [id]);

  return !loading ? (
    <div className="col-7">
      <h1>{country.name.official}</h1>
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
              {country.area} KM
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {country.borders.map((border, index) => {
                  return (
                    <li key={index}>
                      <Link to={`/${border}`}>
                        {
                          countries.find(
                            (country) => country.alpha3Code === border
                          ).name.official
                        }
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
  ) : (
    <div>Erro</div>
  );
};

export default CountryDetails;
