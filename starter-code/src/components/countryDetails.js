import React from 'react';

import { Link } from 'react-router-dom';

function CountryDetails(props) {
    console.log("props:  ",props);

    const theCode = props.match.params.code;
    console.log("theCode:  ",theCode);
    
    // .find method does the exact same thing as .filter method with the same sytax 
    // except instead of giving you back an array of matches it gives you the FIRST! single match
    const theActualCountry = props.bunchaCountries.find((eachCountry) => {
        return eachCountry.cca3 === theCode;
    })

    console.log("theActualCountry:  ", theActualCountry);

    const showBorders = () => {
      return theActualCountry.borders.map((eachBorder, index) => {

        const borderCountry = props.bunchaCountries.find((eachCountry) => {
          return eachCountry.cca3 === eachBorder;
      })


        return(
          <div key={index}>
            <Link to={"/"+eachBorder}>
              {borderCountry.name.common}
            </Link>
          </div>
        )
      })
    }
    

    return(
      <div>
        <h3>{theActualCountry.name.common}</h3>
        <h5>Capital: {theActualCountry.capital}</h5>
     
        <div>
          <h5>Area: {theActualCountry.area} km<sup>2</sup></h5>
          {showBorders()}
        </div>

      </div>
    )
}

export default CountryDetails;