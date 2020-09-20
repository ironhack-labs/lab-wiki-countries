import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const Home = (props) => {
  console.log(props.countries[0].name.common);
  return (
    <div>
      {props.countries.map((country, i) => (
        <div key={i}>
          <Link to={`/${country.cca3}`}> {country.name.common}</Link>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Home;
