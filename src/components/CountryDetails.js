import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function CountryDetails() {
  const { countryCode } = useParams();

  const [country, setCountry] = useState(null);

  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${countryCode}`)
      .then((response) => {
        setCountry(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [countryCode]);

  const countryDetails = () => {
    return (
      <div>
        <h1>{country.name.common}</h1>
        <tbody>
          <tr>
            <td>Capital</td>
            <td>{country.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>{country.area}</td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {country.borders.map((border) => {
                  return (
                    <li key={border}>
                      <Link to={`/${border}`}>{border}</Link>
                    </li>
                  );
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </div>
    );
  };
  return <>{country ? countryDetails() : <h2>...</h2>}</>;
}

export default CountryDetails;
