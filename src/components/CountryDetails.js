import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function CountryDetails({ countries }) {
  const countryCode = useParams().id;
  const [countryData, setCountryData] = useState({});

  useEffect(() => {
    setCountryData(
      countries.find((country) => country.alpha3Code === countryCode)
    );
  }, [countryCode]);

  if (countryData.name === undefined)
    return (
      <div className="country">Couldn't fetch this country's data, sorry!</div>
    );

  return (
    <div className="country">
      <img
        alt={countryData.apha3Code + ' flag'}
        src={
          'https://flagpedia.net/data/flags/icon/72x54/' +
          countryData.alpha2Code.toLowerCase() +
          '.png'
        }
      />
      <h2>{countryData.name.common}</h2>
      <table>
        <tbody>
          <tr>
            <th>Capital</th>
            <td>{countryData.capital}</td>
          </tr>
          <tr>
            <th>Area</th>
            <td>{countryData.area}</td>
          </tr>
          <tr>
            <th>Borders</th>
            <td>
              {countryData.borders.map((neighbourCode) => {
                const neighbour = countries.find(
                  (country) => country.alpha3Code === neighbourCode
                );
                return (
                  <Link key={neighbourCode} to={'/countries/' + neighbourCode}>
                    {neighbour.name.common}
                    <br />
                  </Link>
                );
              })}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;
