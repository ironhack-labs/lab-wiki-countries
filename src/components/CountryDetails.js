import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import countriesArr from './countries.json';

const Home = (props) => {
  const country = [...countriesArr].find((country) => {
    return country.cca3 === props.match.params.cca3;
  });
  console.log(country);
  return (
    <div>
      <p>{country.name.common}</p>
      <p>capital: {country.capital[0]} </p>
      <p>currency: {country.currency[0]} </p>
      <p>flag: {country.flag} </p>
    </div>
  );
};

export default Home;
