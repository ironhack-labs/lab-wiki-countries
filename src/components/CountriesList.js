import countriesData from '../countries.json';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function CountriesList() {
  const [countries, setCountries] = useState(countriesData);

  return (
    <div className="col-5 " style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div className="list-group">
        {countries.map((country) => {
          return (
            <div
              key={country.alpha3Code}
              className="list-group-item list-group-item-action"
            >
              <h3>
                <img
                  src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                  alt="flag"
                  style={{ width: '20px' }}
                />
                <Link
                  to={`/countries/${country.alpha3Code}`}
                  style={{
                    textDecoration: 'none',
                    color: 'black',
                    fontSize: '1rem',
                  }}
                >
                  {country.name.common}
                </Link>
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CountriesList;