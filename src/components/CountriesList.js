import React from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';
import queryString from 'query-string';

const CountriesList = () => {
  //const queryValues = queryString.parse(props.location.search);
  //console.log(queryValues);
  return (
    <div className="col-5" style={{ maxHeight: 90 + 'vh' }}>
      <div className="list-group">
        {countries.map((elem) => {
          return (
            <div key={elem.cioc}>
              <p className="list-group-item list-group-item-action">
                <Link to={`/countries/${elem.cca3}`}>
                  <img
                    style={{ width: '25px' }}
                    src={`https://www.countryflags.io/${elem.cca2}/flat/64.png`}
                  alt ="flag"/>
                  {elem.name.common}
                </Link>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CountriesList;