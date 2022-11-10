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
            <p className="card-text">Continent {country.region}</p>
            <hr />
            <p>Capital {country.capital[0]}</p>
            <hr />
            <p>Area {country.area} km²</p>
            {country.borders.length !== 0 && (
              <>
                <hr />
                <p>Borders</p>
                <ul>
                  {country.borders.map((border) => (
                    <li key={border}>
                      <Link to={border}>{giveBackCountryName(border)}</Link>
                    </li>
                  ))}
                </ul>
                <hr />
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
export default CountryDetails;
