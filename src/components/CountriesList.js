import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default function CountriesList(props) {
  return (
    <div className="lists">
      <ul style={{ overflow: 'scroll', height: '100vh' }}>
        {props.countries.map((country) => {
          return (
              <li key={country.cca3}>
                <img className='flag'
                  src={country.flag}
                />
                <Link to={`/${country.alpha3Code}`}>{country.name}</Link>
              </li>
          );
        })}
      </ul>
    </div>
  );
}
