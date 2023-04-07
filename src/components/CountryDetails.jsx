import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getOneCountryByAPI } from '../services/countries';

const initialStates = {
  country: {},
  borders: [],
  loaded: false,
};

const CountryDetails = ({ alphas }) => {
  const [country, setCountry] = useState(initialStates);
  const { code } = useParams();

  useEffect(() => {
    getOneCountryByAPI(code).then((res) => {
      const borders = [];

      alphas.forEach((alpha) => {
        res.borders.forEach((country) => {
          if (alpha.alpha3Code === country)
            borders.push({
              name: alpha.name,
              alpha3: alpha.alpha3Code,
              alpha2: alpha.alpha2Code,
            });
        });
      });

      setCountry((prev) => ({
        ...prev,
        country: res,
        borders: borders,
        loaded: true,
      }));
    });
  }, [alphas, code]);

  return (
    <div className="col-7">
      {country.loaded ? (
        <>
          <img
            src={`https://flagpedia.net/data/flags/w580/${country.country.alpha2Code.toLowerCase()}.webp`}
            alt={country.country.name.common}
          />
          <h1>{country.country.name.common}</h1>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td style={{ width: '30%' }}>Capital</td>
                <td>{country.country.capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {country.country.area} km
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    {country.borders.map((border, i) => (
                      <li
                        key={i}
                        className="mb-3 d-flex align-items-center g-1"
                      >
                        <img
                          src={`https://flagpedia.net/data/flags/w40/${border.alpha2.toLowerCase()}.webp`}
                          alt={border.name}
                          className="mr-3"
                        />
                        <Link to={`/${border.alpha3}`}>{border.name}</Link>
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </>
      ) : (
        <h1>Loading Country</h1>
      )}
    </div>
  );
};

export default CountryDetails;
