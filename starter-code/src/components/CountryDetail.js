import React from 'react';
import {
	Container,
} from "reactstrap";
import countries from "../countries.json"
import { Link } from 'react-router-dom';

const CountryDetail = (props) => {
    const name = props.match.params.name 
    const country = countries.find(country => country.name.official === name)
    console.log(country)
    let borderNames = [];
    if (country.borders.length > 0) {
        for (let i = 0; i < country.borders.length; i++) {
            borderNames.push(countries.find(foundCountry => foundCountry.cca3 === country.borders[i]).name.official)
        }
        borderNames = borderNames.map(v => <li><Link to={`/country/${v}`}></Link></li> )
    }
    return (
      <Container>
       <h1>{name}</h1>
       <hr/>
       <span>Capital     {country.capital}</span>
       <hr/>
       <span>Area        {country.area} km²</span>
       <hr/>
       <span>Borders</span>
       <ul>
          {borderNames} 
       </ul>

      </Container>
    );
  }

export default CountryDetail;
