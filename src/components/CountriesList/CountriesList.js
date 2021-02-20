import React from 'react';
import { Link } from 'react-router-dom';

function CountriesList({ data }) {
  console.log(data)
  return (
    <div className="container">
      <div className="row">
        <div
          className="col-12"
          style={{ maxHeight: '90vh', overflow: 'scroll' }}
        >
          <div className="list-group">
            {data.map((country) => (
              <div
                key={country.cca3}
                className="list-group-item list-group-item-action"
              >
                <Link to={`/${country.cca3}`} className='float-left'>
                    {country.flag} {country.name.official}
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
