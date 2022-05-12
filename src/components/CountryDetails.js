import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../countries.json';
import axios from 'axios';

function CountryDetails() {
  const { countryId } = useParams();
  
  const [countries, setcountries] = useState([])

  useEffect(() => {
      axios.get(`https://ih-countries-api.herokuapp.com/${countryId}`)
        .then((response) => {
          setcountries(response.data)
        })
        .catch(e => console.log("error getting countries list", e));
    }, [countryId])
console.log(countries);
  return (
    
        <div key={countries.id} className="box">
            <h2>Country Details</h2>
            <h3>{countries.name.common}</h3>
            <h4>{countries.capital}</h4>
            <h4>{countries.area}</h4>
            <h4>{countries.borders}</h4>
        </div>
    
  );
}

export default CountryDetails;