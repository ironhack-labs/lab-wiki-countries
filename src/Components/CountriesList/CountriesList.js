import React from 'react';
import { Link } from 'react-router-dom';
import './CountriesList.css';

function CountriesList(props) {
  const { official } = props.country.name;
  return (
    <Link to={`/country/${props.country.cca3}`}>
      <div className="CardCountry">
        {props.country.flag}
        {official}
      </div>
    </Link>
  );
}

export default CountriesList;
