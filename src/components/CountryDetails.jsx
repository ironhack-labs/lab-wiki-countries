import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function CountryDetails({ countries }) {
  const { countryCode } = useParams();
  const [countryDetail, setCountryDetail] = useState(null);

  const selectedCountry = countries.find(
    (country) => country.alpha3Code === countryCode
  );

  return (
    <div class="col-7">
      <h1>{selectedCountry.name.official}</h1>
      <table class="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{selectedCountry.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {selectedCountry.area}
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>
              Borders:
              {selectedCountry.borders.map((border) => {
                const borderCountry = countries.find(
                  (country) => country.alpha3Code === border
                );
                return (
                  <Link to={`/details/${borderCountry.alpha3Code}`}>
                    {borderCountry.name.official}
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
