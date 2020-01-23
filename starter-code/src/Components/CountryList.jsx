import React from 'react';
import { NavLink } from 'react-router-dom';

export default function CountryList(props) {
  const { countriesArr } = props;
  return countriesArr.map((e, i) => {
    const { name, cca2, cca3 } = e;
    return (
        <NavLink activeClassName="highlighted" to={`/${cca3}`}>
      <div key={i}>
          <img
            src={`https://www.countryflags.io/${cca2}/flat/32.png`}
            alt={name.common}
          />
          <span style={{ marginLeft: '10px' }}>{name.common}</span>
      </div>
        </NavLink>
    );
  });
}
