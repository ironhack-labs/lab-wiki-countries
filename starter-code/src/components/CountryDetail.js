import React from 'react';
import countries from "../countries.json";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

const countryDetails = (props) => {
    
    const { params } = props.match;
    const foundCountry = countries.find(country => country.cca3 === params.countryCode);

    const bordersList = foundCountry.borders.map((borderCountryCode) => {
      return countries.find(country => country.cca3 === borderCountryCode)                                 
    });

    const countryList = bordersList.map((country) => {
      return (
                  
        <Link to= {`/${country.cca3}`} key={country.cca3} >         
        {country.name.common}        
        </Link>
                   
      )                                 
    });    
  
    return (
      <div>
        <h1>{ foundCountry.name.common }</h1>
        <table class="table">
          <thead></thead>
          <tbody>
            <tr>
              <td className="width: 30%">Capital</td>
              <td>{ foundCountry.capital }</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>{ foundCountry.area } km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul className="list-group as li">
                {countryList}                  
                </ul>
              </td>
            </tr>
          </tbody>
        </table>    
      </div>
    )
  }

export default countryDetails;
