import React from 'react';
import { Link } from 'react-router-dom';

export default function CountriesList(props) {
  const mappedData = props.countries.map((country) => (
    <li key={country.name.common}>
      <Link to={`/about/${country.name.common}`}>{country.name.common}</Link>
    </li>
  ));
  console.log(mappedData);
  return (
    <>
      <ul>{mappedData}</ul>
    </>
  );
}
