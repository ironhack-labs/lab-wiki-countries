import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { nanoid } from "nanoid";

export function CountryDetails({countries, apiUrl}){
    const {id} = useParams();
    const [country, setCountry] = useState(null);

   useEffect( () => {
     const fetchData = async () => {
      try{
       const response = await axios.get(`https://ih-countries-api.herokuapp.com/countries/${id}`)
       setCountry(response.data);
      }catch(err){
        console.log("There was an error", err)
      }
     }

     fetchData()
    }, [id])

    
    return(
      <>
        <h2>{country !== null && country.name.common}</h2>
        <p>Capital: {country !== null && country.capital}</p>
        <p>Area: {country !== null &&  country.area} km2</p>
         <div>
          <p>Borders:</p>
          <div className="d-flex flex-column gap-2">
          { country !== null && country.borders.map((item) => {
            return(
             <Link key={nanoid()} to={`/${item}`}>{item}</Link>
            );
          })}
          </div>
         </div>
      </>
    );
}