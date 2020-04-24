import React from 'react';
// import { Link } from 'react-router-dom';

const CountriesNav = ({ countries }) => {
  return (
    <div className='col-5' style={{maxHeight: '90vh', overflow: 'scroll'}}>
      <div className='list-group'>
        {countries.map((country, i) => <CountryLink key={i} country={country} />)}
      </div>
  </div>
  );
}

const CountryLink = ({ country }) => {
  const { cca3, flag, name } = country;
  return <a className='list-group-item list-group-item-action' href={`/${cca3}`}>{flag}&nbsp;{name.common}</a>
}

export default CountriesNav;
