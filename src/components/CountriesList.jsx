import React from 'react';
import { Link } from 'react-router-dom';

function CountriesList(props) {
  return (
    <div>
      {props.countries.map((oneCountry) => {
        return (
          <Link
            className="list-group-item list-group-item-action"
            key={oneCountry.alpha3Code}
            to={`/${oneCountry.alpha3Code}`}
          >
            <img
              src={`https://flagpedia.net/data/flags/icon/72x54/${oneCountry.alpha2Code.toLowerCase()}.png`}
            />
            <h2>{oneCountry.name.common}</h2>
          </Link>
        );
      })}
    </div>
  );
}

export default CountriesList;
