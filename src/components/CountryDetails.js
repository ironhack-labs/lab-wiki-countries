import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

const CountryDetails = ({countries}) => {
    const {id} = useParams();
    const country = countries.find(country => country.alpha3Code === id);

    const [countryData, setCountryData] = useState(null);

    useEffect(() => {
        axios
        .get(`https://ih-countries-api.herokuapp.com/countries/${id}`)
        .then((response) => {
            setCountryData(response.data);
        })
        .catch((error) => {
            console.error('Error fetching country data:', error);
        });
    }, [id]);

    if(!country){
        return <div>Sorry, country not found!</div>
    }
    const borderingCountries = countries.filter((c) =>
        country.borders.includes(c.alpha3Code)
    );

    return (
        <div>
            <img
              src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
              alt={`${country.name.common} flag`}
              style={{ marginRight: '10px' }}
            />
            <h1>{country.name.common}</h1>
            <p>Capital: {country.capital}</p>
            <p>Area: {country.area} km</p>
            <p>Borders:{" "}
        {borderingCountries.length > 0
          ? borderingCountries.map((c) => c.name.common).join(", ")
          : "None"}</p>

        </div>
    );
};


export default CountryDetails;