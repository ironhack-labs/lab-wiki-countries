import { NavLink, Route, Routes } from "react-router-dom";
import CountryDetails from "./CountryDetails";


function CountryList({countries}) {
  console.log(countries)
    return (
      <div >
        {countries.map((country) => {
          return <>
          <NavLink to={`/${country.alpha3Code}`}>{country.name.common}</NavLink> 
          <br/>
          
          </>
        })}

      </div>
    );
  }
  
  export default CountryList;