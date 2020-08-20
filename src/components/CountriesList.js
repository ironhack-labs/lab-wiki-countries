import React from 'react';
import { Link } from 'react-router-dom';

function CountriesList (props) {
    return (
        <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
          <div className="list-group">
            {props.countries.map((country, i) => {
              return (
                <Link to={`/${country.cca3}`} key={i}>
                  <div className="list-group-item list-group-item-action">
                    {country.flag} {country.name.common}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
    );
}

export default CountriesList;
