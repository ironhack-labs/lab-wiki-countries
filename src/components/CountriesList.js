import countriesArr from "../countries.json";
import { Route, Routes, NavLink } from "react-router-dom";
import { computeHeadingLevel } from "@testing-library/react";
import CountryDetails from "./CountryDetails";



function CountriesList(props){
console.log(props.countriesArr)
   


    return (
      <>
        {props.countriesArr.map((country) => {
          return (
              <>
              
            <div key={country.alpha3Code}>
              <NavLink to={`/${country.alpha3Code}`}>
                <p> {country.name.common} </p>
              </NavLink>
            </div>
            </> 
          );
        })}

    
      </>
    );

}

export default CountriesList;
