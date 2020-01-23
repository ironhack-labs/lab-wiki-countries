import React from "react";
import countries from '../countries.json';
import { Link } from 'react-router-dom';

const CountryDetails = props => {

  // filterMatch can be anything, it is a recursive reference, whereas within each "oneCountry" object, cca3 is the property title that must be appropriately referenced.

  //countries is the defined array to filter through 

  const getCountry = (filterMatch, filterArray) => filterArray.filter(oneCountry => oneCountry.cca3 === filterMatch)[0];
  
  const { params } = props.match;

  // Code here has to match what I sent from params in App.js
  const foundCountry = getCountry(params.code, countries);
  console.log(foundCountry)

    return (
        
        <div id="Country-Details-Component" name={props.name}>
        <h1>{foundCountry.name.common}</h1>
        <hr />
        <p>{foundCountry.area}</p>
        <hr />
        <ul>
          {foundCountry.borders.map(element => {
            return (  
              
              <li> <Link to={element}> {getCountry(element,countries).name.common} </Link> </li>
            )
          }
          )}
        </ul>
        <hr />
        </div>
    )
} 

export default CountryDetails;


// <div id = "Country-List">

// {this.state.countries.map(element => {
//   return (<CountryListItem name={element.name.common} image={element.flag} code={element.cca3} />);
// })}
// </div>
