import { useState } from 'react';
import countries from './../countries.json';
import { useParams, Link } from 'react-router-dom';

function CountryDetail() {
  const [currentCountries, setCountries] = useState(countries);
  let params = useParams();
  let selectedCountryAlpha = params.alpha;
  const selectedCountry = countries.filter(
    (country) => country.alpha3Code === selectedCountryAlpha
  );

  return (
    <div>
      <h1>Country Details</h1>
      <table className="table">
        <thead></thead>

        <tbody>
          <tr>
            <td>Capital</td>
            <td>{selectedCountry[0].capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {selectedCountry[0].area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              {/* {selectedCountry[0].borders} */}
              <ul>
                {selectedCountry[0].borders.map((borderCountry) => (
                  <li key={borderCountry}>
                    <Link to={'/country/' + borderCountry}>
                      {borderCountry}
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

export default CountryDetail;
