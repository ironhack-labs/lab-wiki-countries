import React from 'react';
import { Link } from 'react-router-dom';

export default function Country(props) {
  const {name, alpha3Code, alpha2Code} = props;

  return (
    <Link to={`/${alpha3Code}`} className="country-from-list">
        <img src={`https://flagpedia.net/data/flags/icon/72x54/${alpha2Code.toLowerCase()}.png`} alt={name.official}/>
        <h3>{name.official}</h3>
    </Link>
  )
}
