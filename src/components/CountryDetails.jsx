import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const CountryDetails = ({ countries, alphas }) => {
  const [country, setCountry] = useState([]);
  const [border, setBorder] = useState([]);

  const { code } = useParams();

  useEffect(() => {
    setCountry(countries.filter((country) => country.alpha3Code === code));
  }, [code, countries]);

  useEffect(() => {
    const borders = [];

    alphas.forEach((alpha) => {
      country[0]?.borders.forEach((country) => {
        if (alpha.alpha3Code === country)
          borders.push({
            name: alpha.name,
            alpha3: alpha.alpha3Code,
            alpha2: alpha.alpha2Code,
          });
      });
    });

    setBorder(borders);
  }, [alphas, country]);

  return (
    <>
      {country.length && (
        <div className="col-7">
          <img
            src={`https://flagpedia.net/data/flags/w580/${country[0].alpha2Code.toLowerCase()}.webp`}
            alt={country[0].name.common}
          />
          <h1>{country[0].name.common}</h1>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td style={{ width: '30%' }}>Capital</td>
                <td>{country[0].capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {country[0].area} km
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    {border?.map((border, i) => (
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
        </div>
      )}
    </>
  );
};

export default CountryDetails;
