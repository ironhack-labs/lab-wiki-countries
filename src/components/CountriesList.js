import React from 'react'

import { Link, useParams} from "react-router-dom"
const CountriesList = (props) => {
  
//   const [countriesList, setCountriesList] = useState([])
// const {alpha3Code} = useParams();
  
  return (
    <div>
    <h2>CountriesList</h2>
       {props.listOfCountries.map((country) => {
          return (
            <Link to={country.alpha3Code}  key={country.alpha3Code} >{country.name.common}</Link>
          )
       })
       }
    </div>
  )
}

export default CountriesList