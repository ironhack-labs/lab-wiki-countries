import { useParams } from "react-router-dom";

function CountryDetails({countries}) {
  const {id} = useParams()
  console.log("country id", id)
  let country = countries.find((country) => country.alpha3Code === id )
  console.log("this is countryDetails",country)
  if(!country){
    return <div>
      Country not found!
    </div>
  }
  console.log(country);
  return (
    <div>
    <h1>{country.name}</h1>
    <p>{country.capital}</p>
    
  </div>
  ) 
}

export default CountryDetails;
