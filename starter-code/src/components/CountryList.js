import React from 'react';
import countries from "../countries.json";
import {Link} from "react-router-dom";

const CountryList = () => {
 
  return (
    <div className= "List">
    <div className="">
    
      <h2>Wiki Countries:</h2>
      { countries.map((eachCountry, index) => {
        return (
            <div key={index}>
          {/* <div key={eachCountry.name}> */}
            <h3>
            {/* <ul>
                <li>{eachCountry.name.common}</li>
            </ul> */}
            
              <Link to={`/countrydetails/${eachCountry.name.common}`}>{eachCountry.flag}{eachCountry.name.common}</Link>
            
            </h3>
            {/* <h4>{eachProject.technologies}</h4> */}
            <hr />
          </div>
        );
      })}
      </div>
    </div>
  );
};

export {CountryList, countries}; 