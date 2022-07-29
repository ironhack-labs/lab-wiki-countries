import CountryDetails from './CountryDetails';
import { Routes, Route, NavLink, Link } from 'react-router-dom';
import countriesArray from '../countries.json';

function CountriesList() {
  const result = countriesArray.map((country) => {
    return (
      <div className="row" key={country.name}>
        <div
          className="col-5"
          style={{ maxHeight: 90 + 'vh', overflow: 'scroll' }}
        >
          <div className="list-group">
            <Link
              className="list-group-item list-group-item-action"
              to={`/${country.alpha3Code}`}
            >
              {country.name.altSpellings[0]} {country.name.common}
            </Link>
          </div>
        </div>
      </div>
    );
  });
  console.log('................................' + result);

  return <div className="container">{result}</div>;
}

export default CountriesList;
