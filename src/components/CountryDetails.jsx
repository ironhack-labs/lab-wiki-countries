import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function CountryDetails({ countries }) {
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const { countryCode } = useParams();

  useEffect(() => {
    async function fetchCountry() {
      const apiURL = `https://ih-countries-api.herokuapp.com/countries/${countryCode}`;
      const response = await fetch(apiURL);
      const data = await response.json();
      setCountry(data);
      setLoading(false);
    }
    fetchCountry();
  }, [countryCode]);

  const giveBackCountryName = (alpha3) => {
    return countries.find((country) => {
      return country.alpha3Code === alpha3;
    }).name.common;
  };

  // Just for fun here // Comparing the area to that of Germany
  // if the result is 0.00009564079 it returns 0.000095
  const customRoundedNumber = (num) => {
    const result = (num / 357588).toString();
    const index = result.lastIndexOf('000');
    if (index === -1) {
      return result.substring(0, 5);
    }
    return result.substring(0, index + 5);
  };

  return (
    <>
      {!loading && (
        <div
          className="card"
          style={{
            width: '20rem',
            height: 'fit-content',
            margin: 'auto',
            marginTop: '20px',
          }}
        >
          <img
            src={`https://flagpedia.net/data/flags/icon/144x108/${country.alpha2Code.toLowerCase()}.png`}
            alt={country.name.official}
            style={{ width: '80%', margin: 'auto', marginTop: '20px' }}
          />
          <div className="card-body">
            <h2 style={{ textAlign: 'center' }} className="card-title">
              {country.name.common}
            </h2>
            <p className="card-text text-muted">{country.region}</p>
            <hr />
            {country.capital[0] && (
              <>
                <p>
                  Capital:{' '}
                  <a
                    target="blank"
                    href={`https://www.google.com/maps/search/?api=1&query=${country.capital[0]}`}
                  >
                    {country.capital[0]}
                  </a>
                </p>
                <hr />
              </>
            )}

            <p>Area: {country.area} km²</p>
            <p>{customRoundedNumber(country.area)} times the size of Germany</p>
            {country.borders.length !== 0 && (
              <>
                <hr />
                <p>Borders:</p>
                <ul>
                  {country.borders.map((border) => (
                    <li key={border}>
                      <Link to={border}>{giveBackCountryName(border)}</Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
            <hr />
            <a
              target="blank"
              href={`https://www.google.com/maps/search/?api=1&query=${country.name.official}`}
            >
              Check out on maps
            </a>
          </div>
        </div>
      )}
    </>
  );
}
export default CountryDetails;
