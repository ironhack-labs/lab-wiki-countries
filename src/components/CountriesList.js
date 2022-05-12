import { useEffect, useState } from "react";
import "../countries.json";
import axios from 'axios';
import { NavLink } from "react-router-dom";

function CountriesList(props) {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        axios.get("https://ih-countries-api.herokuapp.com/countries")
          .then(response => {
            setCountries(response.data);
            //console.log(response.data)
          })
          .catch(e => console.log("error getting countries from API", e))
      }, [])

    return (
        <div className="CountriesList">
        {countries.map((country) => {
              return (
                <div key={country.id} className="box">
                <NavLink to={`/${country.alpha3Code}`}> {country.name.common} </NavLink>
                {/* <h3><a href={country.alpha3Code}>{country.name.common}</a></h3> */}
                </div>
              )
            })}
          
        </div>
    )
}
export default CountriesList;