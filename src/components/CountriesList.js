import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CountriesList() {
    const [countries, setCountries] = useState([])
    
    useEffect(() => {
      axios
        .get('https://ih-countries-api.herokuapp.com/countries')
        .then(response => {
          setCountries(response.data);
        })
        .catch(err => console.log('Error getting countries from API: ', err));
    }, []);

      return (
        <div>

          <h2>List of Countries </h2>

          {countries.map(element => {
            return (
              <div>
                <Link to="/countrylist/{element.alpha3Code}">
                  Country: {element.name.common}
                </Link>
              </div>
            );
          })}
        </div>
      );
    
}

export default CountriesList