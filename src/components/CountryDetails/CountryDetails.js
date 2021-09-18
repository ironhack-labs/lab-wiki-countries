import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function CountryDetails(props) {
  const [country, setCountry] = useState({
    name: '',
    capital: [],
    area: '',
    borders: [],
  });

  useEffect(() => {
    const foundCountry = props.countries.find(
      (countryObj) => countryObj.alpha3Code === props.match.params.alpha3Code
    );

    if (foundCountry) {
      const { name, capital, area, borders } = foundCountry;

      setCountry({
        name: name,
        capital: [...capital],
        area: area,
        borders: [...borders],
      });
    }
  }, [props]);

  function getCountryNameByCode(alpha3Code) {
    const foundCountry = props.countries.find(
      (countryObj) => countryObj.alpha3Code === alpha3Code
    );

    if (foundCountry) {
      return foundCountry.name;
    }

    return '';
  }

  return (
    <div className="col-5">
      <h1>{country.name}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>          
            <td key={country.capital}>{country.capital}</td>
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
                {country.borders.map((border) => (
                  <li key={border}>
                    <Link to={`/${border}`}>
                      {getCountryNameByCode(border)}
                    </Link>
                  </li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;
