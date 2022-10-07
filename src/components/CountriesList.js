import React from 'react';
import { Link } from 'react-router-dom';
// import countries from '../countries.json';

function CountriesList({ countriesData }) {
  console.log({ countriesData });
  return (
    <div className="container">
      {/* <!-- Bootstrap row wrapper div --> */}
      <div className="row">
        {/* <!-- Countries List (Bootstrap column) --> */}
        <div className="col-5">
          <div className="list-group">
            {countriesData.map((country) => (
              <div key={country.name.common}>
                <Link to={`/${country.alpha3Code}`}>
                  <div>
                    <img
                      style={{ width: 25 }}
                      src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                      alt={country.name.common}
                    />
                    <p>{country.name.common}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountriesList;
