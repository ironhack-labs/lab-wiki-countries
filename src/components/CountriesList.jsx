import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function CountriesList(props) {
  const {countries} = props;

  // const [countriesList, setCountriesList] = useState([]);

  // useEffect(() => {
  //   setCountriesList(props.countries);
  // }, [props.countries]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-5">
          <div className="list-group"></div>
          <h2>Country List</h2>
          {countries.map((country) => {
            return (
              <div key={country.alpha3Code}>
                <Link to={`/${country.alpha3Code}`}>
                  {country.name.official}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CountriesList;
