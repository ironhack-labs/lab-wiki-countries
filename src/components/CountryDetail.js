import React from 'react'
import countries from '../countries.json';
import { Link } from 'react-router-dom';

 const CountryDetail = (props)=> {     
      const getProject = (id) => {
        const theProject = oneProject => {
          return oneProject.cca3 === id;
        }
        return countries.find(theProject)
      };
      
      const foundProject = getProject(props.match.params.id);
      const getCountryNameUsingCode = (border) => {
        var country = countries.find((country) => border === country.cca3);
        return country.name.common;
      };

    return (
        <div>
            <h2>{foundProject.name.common}</h2>
            <h2>{foundProject.ccn3}</h2>
            <h4>Countries  {foundProject.area} km<sup>2</sup> </h4>     
            <h6>
            Border :            
            </h6>
        </div>
    );
}

export default CountryDetail;