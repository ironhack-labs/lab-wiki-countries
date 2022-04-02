import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CountriesList.module.css';
const renderCountries = (country, i) => {
  return (
    <div key={i} className={styles.link}>
      <div>
        <img
          className={styles.flag}
          src={`https://countryflagsapi.com/png/${country.alpha2Code.toLowerCase()}`}
        />
      </div>
      <Link to={`/${country.alpha3Code}`}>
        <div className={styles.name}>{country.name.official}</div>
      </Link>
    </div>
  );
};

const CountriesList = ({ allCountries }) => {
  return (
    <div>
      <div>{allCountries.map((country, i) => renderCountries(country, i))}</div>
    </div>
  );
};

export default CountriesList;
