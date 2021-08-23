import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default function CountriesList(props) {
  return (
    <div className="lists">
      <ul style={{ overflow: 'scroll', height: '100vh' }}>
        {props.countries.map((country) => {
          return (
            <>
              <li>
                <img
                  src={`https://www.countryflags.io/${country.cca2}/flat/64.png`}
                />
                <Link to={`/${country.cca3}`}>{country.name.official}</Link>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
}
