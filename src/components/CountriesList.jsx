import React from 'react';
import '../stylesheets/CountriesList.css';
import countries from '../countries.json';
import CountryCard from './CountryCard'

const CountriesList = (props) => {
  return (
    <section className="CountriesList">
      {countries.map((country) => {
        return (
          <CountryCard country={country} key={country.cca3}/>
        );
      })}

    </section>
  );
};

export default CountriesList;
