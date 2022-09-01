import React from 'react'
import CountriesArr from '../countries.json'
import { Routes, Route, Link, useParams } from 'react-router-dom';


export const CountriesList = ({data}) => {
  
  // console.log(CountriesArr)
  return (
    <div className="container">
      <div className="row">
        <div className="col-5">
          <div className="list-group" style={{overflow: "scroll"}} >
            {data.map((elem) => (
        <div>
          <img src={`https://flagpedia.net/data/flags/icon/72x54/${elem.alpha2Code.toLowerCase()}.png`} alt={elem.name.common}></img>
          <Link to={`/${elem.alpha3Code}`}>{elem.name.common}</Link>
        </div>
      ))}
          </div>
        </div>
      </div>
    </div>
  ) 
}
export default CountriesList;