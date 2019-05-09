import React from 'react';
import countries from './countries.json'
import { Link } from 'react-router-dom';

const CountryDetail = (props) => {
  console.log(props)
  const getCountry = (cca3) => {
    const theCountry = oneCountry => {
      return oneCountry.cca3 === cca3
    }

    return countries.find(theCountry)

  }
  const { params } = props.match
  const foundCountry = getCountry(params.id, 10);
  return (
    <article>
      <h3>{ foundCountry.name.common } 
      <h4>Capital:{ foundCountry.capital }</h4></h3>
      <h4>Area: { foundCountry.area } km <sup>2</sup></h4>
      <ul class="list-group">
        <h5>Borders</h5>
      {foundCountry.borders.map((country, index) => 
        <li class="list-group-item"><Link to={`/${country}`}>{ country}</Link></li>
      )}
      </ul>
    </article>
  )
}

export default CountryDetail;
