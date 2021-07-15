import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CountryDetails(props) {
    const [countryDetails, updateCountry] = useState({});

    const getData = async () => {
        let id = props.match.params.id;
        let response = await axios.get(`https://restcountries.eu/rest/v2/alpha/${id}`);
        const { alpha3Code, name, capital, region, population, alpha2Code } = response.data;
        
        let countryObj = {
            id: alpha3Code,
            name: name,
            capital: capital,
            region: region,
            population: population,
            flag: alpha2Code
        };

        console.log(countryObj);

        updateCountry(countryObj);
    }

    useEffect(() => {
        getData();
    }, [])
    
    useEffect(() => {
        let newId = props.match.params.id;
        let currentId = countryDetails.id;

        if (newId !== currentId) {
            getData();
        }
    })
    
    return (
        <div className="column-6 w-50">
            {
                !countryDetails ?
                <h1>Loading...</h1> : 
                <div>
                    <h2>
                        <span>
                            <img src={`https://www.countryflags.io/${countryDetails.flag}/flat/64.png`} />
                        </span>
                        {countryDetails.name}
                    </h2>
                    <p>
                        <b>Capital: </b>{countryDetails.capital}
                    </p>  
                    <p>
                        <b>Region: </b>{countryDetails.region}
                    </p>  
                    <p>
                        <b>Population: </b>{countryDetails.population}
                    </p>  
                </div>
            }
        </div>
    )
}

export default CountryDetails
