import React from 'react';
import list from '../countries.json';
import { Link } from 'react-router-dom';

function CountriesList() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-5" style={{ maxheight: 700, overflow: 'scroll' }}>
          <div className="list-group">
            {list.map((countries) => {
              return (
                <Link to={`/${countries.cca3}`} key={countries.cca3}>
                  <div className="list-group-item list-group-item-action">
                    {countries.flag} {countries.name.official}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountriesList;
