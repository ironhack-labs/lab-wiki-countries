import { useState } from "react";
import { Link } from "react-router-dom";


function CountriesList(props) {
  
  console.log(props)
  const[countriesList, setCountriesList] = useState(props.countries)

  return(
    <div className="d-flex flex-wrap">
      {countriesList.map((element) => {
        return(
          <div key={element.name} className="p-3">
            <h3>{element.name.common}</h3>
            <Link to={`/countrydetails/${element.alpha3Code}`}>More Details</Link>
          </div>  
        )
      })}
    </div>
  )
}

export default CountriesList;
