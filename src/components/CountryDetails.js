import { useEffect, useState } from "react"
import axios from 'axios';
import { useParams} from "react-router-dom"

const CountryDetails = () => {

    const [countryDetails, setCountryDetails] = useState(null);
    const {alpha3Code} = useParams();   
    
    const basicURL = "https://ih-countries-api.herokuapp.com/countries/";
    useEffect(() => {       
     axios
       .get(basicURL + alpha3Code)
       .then((res) => {
        setCountryDetails(res.data)
       })
       .catch((e) => {
        console.log(e);
      });
    }, [alpha3Code])
    console.log(countryDetails)
    const renderDetails=() => {
      return(
       <div>
           <h3>Country Name: {countryDetails.name.common}</h3>
           <p>countryCode: {countryDetails.alpha3Code}</p>   
           <p>Capital City: {countryDetails.capital}</p> 
                 
       </div>
      )
    }

  return (
    <div>
    <h1>This is the country</h1>
    {CountryDetails === null
        ? "loading...."
        : renderDetails()
    }


    </div>
  )
}

export default CountryDetails