import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function CountryDetails({ countries }) {
  const [country, setCountry] = useState(null);
  const params = useParams();

  useEffect(() => {
    let filtered = countries.find((eachCountry) => {
      return eachCountry.alpha3Code === params.countryId;
    });
    setCountry(filtered);
  }, [params.countryId, countries]);

  if (country === null) {
    return '...Loading...';
  }

  return (
    <div>
      <img
        className="mb-4"
        src={`https://flagpedia.net/data/flags/h120/${country.alpha2Code.toLowerCase()}.png`}
        alt="foto-pais"
      ></img>

      <h1>{country.name.common}</h1>
      <table class="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{country.capital[0]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {country.area + ' km'}
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {country.borders.map((border) => {
                  return (
                    <li className="list-unstyled">
                      <Link to={`/${border}`}>
                        {
                          countries.find((country) => {
                            return country.alpha3Code === border;
                          }).name.common
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
  );
}

export default CountryDetails;
