import React from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';

function CountriesList() {
  return (
    <div className="container">
      {/* <!-- Bootstrap row wrapper div --> */}
      <div className="row">
        {/* <!-- Countries List (Bootstrap column) --> */}
        <div className="col-5">
          <div className="list-group">
            {countries.map((country) => (
              <div key={country.name.common}>
                <img src=" https://flagpedia.net/data/flags/icon/72x54/{{country.alpha2Code}}.png" />
                {/* {country.alpha2Code} */}
                <Link to={`/${country.alpha3Code}`}>{country.name.common}</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountriesList;
