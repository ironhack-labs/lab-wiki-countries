import React from "react";
import {Link} from 'react-router-dom';
import countries from "../countries.json";

const CountryDetail = props => {
  const allCountries = [...countries];

  //   console.log(props);
  const found = allCountries.find(country => {
    return country.cca3 === props.match.params.id;

  });
  console.log(found);
  const bordering = found.borders.map( el => {
        return <li className=""><Link to={el}>{el}</Link></li>
})
 

  return (
    <div className="detail">
      <h1>{found.name.common}</h1>
      <h4>Capital: {found.capital}</h4>
      <h4>Area: {found.area}</h4>
      <h5>Bordering Countries: <ul className="bordering">{bordering}</ul></h5>
    </div>
  );
};

export default CountryDetail;
