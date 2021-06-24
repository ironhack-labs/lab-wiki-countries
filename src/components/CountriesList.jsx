import React from 'react';
import { Link } from 'react-router-dom';
import countriesJSON from '../countries.json';

// import CountryDetails from './CountryDetails';

const CountriesList = (props) => {
  const countriesArrayList = [...countriesJSON];
  console.log(props.countriesArrayList);

  return (
    <div>
      {countriesArrayList.map((item, index) => {
        return (
          <div key={index}>
            <p>
              {item.flag}
              <Link to="countryId">{item.name.official}</Link>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default CountriesList;
