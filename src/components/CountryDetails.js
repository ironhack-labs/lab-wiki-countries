
import { useParams } from "react-router-dom";

function CountryDetails({countries}) {
  const id = useParams()
  console.log("huhu", id)
//   const foundCountry = countries.filter((country) => country.alpha3Code === id)
  
//  console.log(foundCountry)
  return (
    <div >
      
      
    </div>
  );
}

export default CountryDetails;