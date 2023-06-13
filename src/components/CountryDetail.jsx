import { useState } from 'react';
import countries from './../countries.json';
import { useParams, Link } from 'react-router-dom';

export function CountryDetail() {
  const [currentCountries, setCountries] = useState(countries);
  let params = useParams();
  let selectedCountryAlpha = params.alpha;

  const selectedCountry = countries.filter(
    (country) => country.alpha3Code === selectedCountryAlpha
  );

  // const borders = countries.filter(
  //   (borderCountry) => borderCountry.alpha3Code === selectedCountry[0].borders
  // );

  if (selectedCountry.length < 1) {
    return <div>no country found</div>;
  }

  return (
    <div>
      <h1>
        <img
          src={
            'https://flagpedia.net/data/flags/icon/72x54/' +
            selectedCountry[0].alpha2Code.toLowerCase() +
            '.png'
          }
          alt={'flag of ' + selectedCountry[0].name.common}
          width={40}
        />
        &nbsp;
        {selectedCountry[0].name.common}
      </h1>
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
              <ul>
                {selectedCountry[0].borders.map((borderCountryAlpha3) => {
                  const foundBorderCountry = countries.find(
                    (country) => country.alpha3code === borderCountryAlpha3
                  );
                  console.log('FOUND', foundBorderCountry);
                  return (
                    <li key={borderCountryAlpha3}>
                      <Link to={borderCountryAlpha3}>
                        {foundBorderCountry.name.common}
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

export default CountryDetail;
