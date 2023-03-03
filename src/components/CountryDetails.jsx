import { useParams } from 'react-router-dom';
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
      <table class="table">
        <tr>
          <td>Name</td>
          <td>Capital</td>
          <td>Area</td>
          <td>Borders</td>
        </tr>
        <tr>
          <td>{selectedCountry.name.official}</td>
          <td>{selectedCountry.capital}</td>
          <td>{selectedCountry.area}</td>
          <td>
            {selectedCountry.borders &&
              selectedCountry.borders.map((border) => (
                <span key={border}>{border} </span>
              ))}
          </td>
        </tr>
      </table>
    </div>
  );
}

export default CountryDetails;
