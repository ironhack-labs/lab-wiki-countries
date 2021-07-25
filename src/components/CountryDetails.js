import React from 'react';
import countryArray from '../countries.json';
import './CountryDetails.css';
//import { Link } from 'react-router-dom';


const countryDetails = (props)  => {
  console.log(props);

  // const getId = (id) => {
  //   const theId = oneId => {
  //     return oneId.cca3 === id;
  //   }
  //   return countryArray.find(theId);
  // }

  // //const { params } = props.match;
  // const idCountry = props.match.params.id;
  // const foundId = getId(idCountry);

  const countryId = props.match.params.id;
  const findCountry = countryArray.find(el => countryId === el.cca3)

  return (
    <div>
      {/* {this.props.countries.map((el)=><>
        <h2>{el.name.common}</h2>
        <p>Capital: <span>{el.capital}</span></p>
        <p>Area: <span>{el.area}km</span></p>
        <p>Borders:</p>
        <ul>
        {el.borders.map((el)=><li><a href={`/${el.cca3}`}>{el}</a></li>)}
        </ul>
      </>)} */}
      <h2>{findCountry.name.common}</h2>
      <p>Capital: <span>{findCountry.capital}</span></p>
        <p>Area: <span>{findCountry.area}km</span></p>
        <p>Borders:</p>
        <ul className="detail">
        {findCountry.borders.map((el)=><li key={findCountry.cca2}><a href=".">{el}</a></li>)}
        </ul>
      
    </div>
  );
};


export default countryDetails;