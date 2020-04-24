import React from 'react';
import { Link } from 'react-router-dom';

const CountriesNav = ({ countries }) => {
  return (
    <div className='col-5' style={{maxHeight: '90vh', overflow: 'scroll'}}>
      <div className='list-group'>
        {countries.map(country => <CountryLink key={country.name.cca3} country={country} />)}
      </div>
  </div>
  );
}

const CountryLink = ({ country }) => {
  const { cca3, flag, name } = country;
  return <Link className='list-group-item list-group-item-action' to={`/${cca3}`}>{flag}&nbsp;{name.common}</Link>
}

export default CountriesNav;
