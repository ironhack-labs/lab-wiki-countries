import React from 'react';
import { Link } from 'react-router-dom';
// import CountryDetails from './CountryDetails';

const CountriesList = (props) => {
  //   console.log('props', props.country.name.common);
  return (
    <div>
      <ul>
        <li>
          {props.country.flag}
          <Link to="/details">{props.country.name.official}</Link>
        </li>
      </ul>
    </div>
  );
};

export default CountriesList;
