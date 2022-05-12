
import { NavLink  } from "react-router-dom";


const CountriesList=({countries})=>{
  return(
    <>
      {countries.map(country=>{
        return(
          <div key={country._id}>
          <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}  />
              <NavLink to ={`/${country.alpha3Code}`}>{country.name.common}</NavLink>
          </div>
        )
      })}
    </>
  )
}

export default CountriesList;