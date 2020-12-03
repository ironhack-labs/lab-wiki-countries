import React from 'react';
import { Link } from 'react-router-dom';


const CountriesList = (props) => {
  // console.log('props', props.countries);

  const countriesList = props.countries;

  return (
    <div classlist="container">
      <div classlist="row">
        <div
          classlist="col-5"
          style={{ maxHeight: '90vh', overflow: 'scroll' }}
        >
          <div classlist="list-group">
            {countriesList &&
              countriesList.map((country) => {
                console.log(country);
                return (
                  <Link
                    to={`/${country.cca3}`}
                    className="list-group-item list-group-item-action"
                    key={country.name.official}
                  >
                    {country.flag}
                    {country.name.official}
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountriesList;
