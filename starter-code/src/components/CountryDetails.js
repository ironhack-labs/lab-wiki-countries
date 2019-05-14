import React from 'react';
import {Link} from 'react-router-dom';
import countries from '../countries.json'

const CountryDetails = (props) => {
    console.log(props);
    const getCountry = (id) => {
        const theCountry = oneCountry => {
          return oneCountry.cca3 === id;
        }
        return countries.find(theCountry)
      };
      
      const { params } = props.match; //params vienen en props.match
      const foundCountry = getCountry(params.id);
       
      return (
        <div>
          <h2>{ foundCountry.name.common } <span style={{fontSize:"14px"}}>{ foundCountry.region }</span></h2>
          <h3>Languages: { foundCountry.languages }</h3>
          <p>{ foundCountry.flag }</p>
          <Link to='/'>Back</Link>
        </div>
      )
    }

export default CountryDetails;