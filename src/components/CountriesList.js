
import { NavLink  } from "react-router-dom";


const CountriesList=({countries})=>{
  return(
    <>
      {countries.map(country=>{
        return(
          <div key={country._id}>
              <NavLink to ={`/${country.alpha3Code}`}>{country.name.common}</NavLink>
          </div>
        )
      })}
    </>
  )
}

export default CountriesList;