import React from 'react';
import { Link } from 'react-router-dom';
const CountriesList = ({data}) => {
  return (
    <div className="CountriesList">
        <ul className="country-list list-group list-group-flush">
          {data.map((country) => {
            return (
              <li className="list-group-item" key={country.alpha3Code}>
                <div>
                  <img
                    src={`https://flagcdn.com/w40/${country.alpha2Code.toLowerCase()}.png`}
                    alt={country.name.common}
                  />
                </div>
                <div className='ctn-country-name'>
                  <Link className="link" to={`/countries/${country.alpha3Code}`}>
                    {country.name.common}
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
    </div>
  );
};

export default CountriesList;
