import countriesData from "../countries.json";
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect} from "react";

import axios from "axios";


function CountryDetails(){

    const{id} = useParams();
    const [country, setCountry] = useState(null)



    useEffect(() => {
axios
.get("https://ih-countries-api.herokuapp.com/countries")
.then((response)=>{

    const foundCountry = response.data.find((country)=> {
  
        return country.alpha3Code === id;
    });
      setCountry(foundCountry)

})

.catch((err) => console.log(err));
     
    }, [id]) //temos de usar o params 


    

    return(
<div>
    <h1> Country Details</h1>

{country && (
    <>
    <img src={`https://flagpedia.net/data/flags/icon/72x54/${(country.alpha2Code).toLowerCase()}.png`} alt="flag"/>
    <h1>{country.name.common}</h1>
    <p>Capital: {country.capital}</p>
    <p>Area: {country.area}</p>
    <p>Borders</p>
    <ul>
    
    {country.borders.map((element)=>{
        return   <li>{element}</li>
    })}
      
    </ul>

    </>)
}

</div>



    )

}
export default CountryDetails;