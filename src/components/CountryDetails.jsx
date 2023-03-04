import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const apiURL = ' https://ih-countries-api.herokuapp.com/countries';

function CountryDetails({ countries }) {
  const [oneCountry, setOneCountry] = useState('');
  const { countryId } = useParams();
  const selectedCountry = countries.find((oneCountry) => {
    return oneCountry.alpha3Code === countryId;
  });
  console.log('Country Id', countryId);
  console.log(countries);

  useEffect(() => {
    const selectedCountry = countries.find((oneCountry) => {
      return oneCountry.alpha3Code === countryId;
    });
    setOneCountry(selectedCountry);
  }, [countryId, countries]);

  console.log('Selected Country', selectedCountry);

  return (
    <div class="col-7">
      <h1>{selectedCountry.name.official}</h1>
      <img src={`https://flagpedia.net/data/flags/icon/72x54/${selectedCountry.alpha2Code.toLowerCase()}.png`} alt={`${selectedCountry.name.official} Flag`} />
      <table class="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Capital</th>
            <th>Area</th>
            <th>Borders</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{selectedCountry.name.official}</td>
            <td>{selectedCountry.capital}</td>
            <td>
              {selectedCountry.area} km
              <sup>2</sup>
            </td>
            <td>
              <ul>
                {selectedCountry.borders.map((border) => {
                  const borderCountry = countries.find(
                    (country) => country.alpha3Code === border
                  );
                  return (
                    <li key={border}>
                      <Link to={`/country/${borderCountry.alpha3Code}`}>
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
}

export default CountryDetails;
