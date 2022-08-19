import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

function CountriesList() {
    const [countries, setCountries] = useState([]);

    const getCountries = async () => {
        try {
            let response = await axios.get(`https://ih-countries-api.herokuapp.com/countries`);
            setCountries(response.data.reverse());
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
      getCountries();
    }, []);

  return (
    <div>
     {countries.map((country) => {
    return (
      <Link key={country._id} to={`/${country.alpha3Code}`}> 
      <div className="bg-light">
      <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="" />
        <p>{country.name.common}</p>
      </div>
      </Link>
    )
})}
    </div>
  )
}

export default CountriesList