import {useState,useEffect} from "react"; 
import axios from "axios"; 
import {useParams} from "react-router-dom"; 
import { Link } from "react-router-dom";


function CountryDetails() {

    const {countryId} = useParams(); 
    const [country, setCountry] = useState(null);


useEffect (() => {
const fetchCountry = async () => {

    try {
        const response = await axios.get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`); 
        setCountry(response.data); 
        console.log(response.data)

    }catch (error) {
        console.error("Error fetching a country",error); 
    }
}
fetchCountry(); 

}, [countryId])

if (!country) {
    return <div>Loading...</div>;
  }

    return (
        <div>
        <h1>{country.name.common}</h1>
        <img 
        src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} 
       
      />
      <p>Capital: {country.capital}</p>
      <p>Region: {country.area}</p>
      <p>Borders:</p>
      <ul>
        {country.borders.map((border)=> (
            <li key={border}>
                <Link to={`/${border}`}>{border}</Link>
            </li>
        ))}
      </ul>



        </div>
  
    )
}

export default CountryDetails;
