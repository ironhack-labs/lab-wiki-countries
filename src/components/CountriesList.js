import { Link } from 'react-router-dom';
import React from 'react';


const CountriesList = (props) => {
  const { countries } = props;
  return (
    <div className="container">
      <div className="row">
        {/* Countries List (Bootstrap column) */}
        <div className="col-5">
          <div className="list-group">
            {countries.map((country) => {
              const { alpha3Code, name } = country;
              return (
                <div key={alpha3Code}>
                  <Link to={`/${alpha3Code}`}>{name.official}</Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountriesList;
