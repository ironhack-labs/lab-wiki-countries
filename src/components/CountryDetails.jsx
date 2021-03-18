import React from "react";
import { Link } from "react-router-dom";
import countriesJSON from "../countries.json";


const CountryDetails =(props)=> {
const countryID = props.match.params.cca3

  const foundCountry = countriesJSON.find((country) => country.cca3 === countryID);
  console.log(foundCountry);

    return (
      <div className="col-7">
         {/* <pre>{JSON.stringify(props, null, 2)}</pre> */}
        <h1>{foundCountry.name.official}</h1>
        <table class="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td >Capital</td>
                  <td>{foundCountry.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                  {foundCountry.area}m
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                    {foundCountry.borders.map((countries)=>{
         return (<li><Link to={`/${countries}`} >{countries}</Link></li>) })}            
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
      </div>
    )
  
}


export default CountryDetails;