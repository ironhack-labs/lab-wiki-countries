import React from 'react'
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
const apiURL = "https://ih-countries-api.herokuapp.com/countries";
function CountriesList() {

    const [fetching, setFetching] = useState(true);
    const [countries, setCountries] = useState([]);
  
    useEffect(() => {
      axios.get(apiURL).then((response) => {
        setCountries(response.data);
        setFetching(false);
      });
    }, []);

    return (
        <div className="col-5 countries-column">
            {fetching && <p>Loading ...</p>}
            {countries.map((country) => (
                <div className="list-group" key={country.alpha3Code}>
                    <div className="list-group-item list-group-item-action">
                        <Link to={`/${country.alpha3Code}`} >
                            <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} width="90px" alt="" /></Link>
                        <Link to={`/${country.alpha3Code}`} >{country.name.common}</Link>
                    </div>

                </div>
            ))}
        </div>
    )
}

export default CountriesList;


