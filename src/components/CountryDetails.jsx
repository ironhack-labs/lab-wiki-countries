import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const CountryDetails = ({ countries }) => {
  const { alpha3Code } = useParams();

  const [country, setCountry] = useState(null);

  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`)
      .then((res) => {
        console.log('API CALL');
        setCountry(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [alpha3Code]);

  //   const country = countries.find(
  //     (country) => country.alpha3Code === alpha3Code
  //   );

  if (!country) return null;

  return (
    <div className="col-7" key={country.alpha3Code}>
      <img
        className=""
        src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
        alt="country flag"
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
                {country.borders.map((border) => {
                  return (
                    <li key={border.alpha3Code}>
                      <Link to={`/${border}`}>{border}</Link>
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
