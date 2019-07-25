import React from 'react'
import { Link } from 'react-router-dom';
import countries from '../countries.json';

const CountryDetails = (props) => {
  console.log(props, 'PROPS');
  
  const getCountry = (id) => {
    const theCountry = oneCountry => {
      return oneCountry.cca3 === id;
    }
    return countries.find(theCountry)
  };

  const { params } = props.match;
  const foundCountry = getCountry(params.id, 10);

  console.log(foundCountry, 'FOUND COUNTRY');
  

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12"> 
            <h2>{foundCountry.name.official}</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-6"> 
           <p>Capital</p> 
          </div>
          <div className="col-6">
            <p>{foundCountry.capital[0]}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-6"> 
            <p>Area</p>
          </div>
          <div className="col-6">
            <p>{foundCountry.area} km2</p>
          </div>
        </div>
        <div className="row">
          <div className="col-6"> 
            <p>Borders</p>
          </div>
          <div className="col-6">
            <ul>
              {
                foundCountry.borders.map((element, index) => {
                  let foundBorder = getCountry(element)
                  return <li key={index}><Link to={`/${element}`}>{foundBorder.name.official}</Link></li>
                })
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CountryDetails;