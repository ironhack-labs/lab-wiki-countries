import { Link, useParams } from 'react-router-dom';

function CountryDetails({ countries }) {
  const { alpha3Code } = useParams();

  function findBorderCountry(alpha3) {
    return countries.find((country) => country.alpha3Code === alpha3);
  }

  return (
    <div className="card text-center m-5">
      {countries
        .filter((country) => country.alpha3Code.includes(alpha3Code))
        .map((country) => (
          <div key={country.alpha3Code}>
            <img
              className="mt-3"
              src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
              alt="flagImage"
            />
            <h2>{country.name.common}</h2>
            <p>Capital: {country.capital}</p>
            <p>
              Area: {country.area} km<sup>2</sup>
            </p>
            <p>Borders:</p>
            {country.borders.length > 0 ? (
              <ul>
                {country.borders.map((border) => {
                  const borderCountry = findBorderCountry(border);
                  return (
                    <li className="list-group-item">
                      <Link
                        to={`/${borderCountry.alpha3Code}`}
                        key={borderCountry.alpha3Code}
                      >
                        {borderCountry.name.common}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p>None</p>
            )}
          </div>
        ))}
    </div>
  );
}

export default CountryDetails;
