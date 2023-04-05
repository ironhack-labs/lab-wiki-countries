import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getOneCountryByAPI } from '../services/countries';

const CountryDetails = ({ alphas }) => {
  const [country, setCountry] = useState([]);
  const [border, setBorder] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const { code } = useParams();

  useEffect(() => {
    getOneCountryByAPI(code).then((res) => {
      setCountry(res);

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
      setBorder(borders);

      setLoaded(true);
    });
  }, [alphas, code]);

  return (
    <div className="col-7">
      {loaded && (
        <>
          <img
            src={`https://flagpedia.net/data/flags/w580/${country.alpha2Code.toLowerCase()}.webp`}
            alt={country.name.common}
          />
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
                  {country.area} km
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    {border.map((border, i) => (
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
      )}
    </div>
  );
};

export default CountryDetails;
