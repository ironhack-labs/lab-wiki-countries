import React from 'react';
import { Link } from 'react-router-dom';

export default function CountriesList(props) {
  const { countries } = props;

  return (
    <div className="col-5">
      <div className="list-group">
        {countries.map((country, index) => {
          return (
            <li className="list-group-item list-group-item-action" key={index}>
              <div><img
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                alt={country.name.official}
              /></div>
              <Link to={`/country/${country.alpha3Code}`}>
                {country.name.official}
              </Link>
            </li>
          );
        })}
      </div>
    </div>
  );
}
