import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function CountryDetails() {
  
  const {alpha3Code} = useParams()
  const [country, setCountry] = useState({})
  
  useEffect(() => {
    axios.get(`https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`)
      .then(response => {
        setCountry(response.data)

        console.log(response.data);
      })
      .catch(e => console.log("something went off" + e))
  }, [])  

  return(
    <div>
      <h1>Details</h1>
      <h3>Capital :{country.capital}</h3>
      <h4>Area: {country.area}</h4>
      <h4>Region: {country.region}</h4>
      <h4>Status: {country.status}</h4>
    </div>
  )
}

export default CountryDetails;


