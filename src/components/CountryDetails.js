import {useParams} from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';

function CountryDetails({countriesList}){
    const [country, setCountry] = useState({})

const {id} = useParams()

useEffect(() => {
    axios.get(`https://ih-countries-api.herokuapp.com/countries/` + id)
      .then( response => {
        console.log(response)
        setCountry(response);
      })
      .catch(e => console.log("error getting characters from API", e));
  }, []);

    return(
<div>
    <h1>{country.name.common}</h1>
    <h1>{country.capital[0]}</h1>
    <h1>{country.area}</h1>
</div>
    )
}
export default CountryDetails
