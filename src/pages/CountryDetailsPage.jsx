import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function CountryDetails() {

    const { countryId } = useParams();

    const [country, setCountry] = useState([]);

    const [fetching, setFetching] = useState(true);

    let apiUrl = `https://ih-countries-api.herokuapp.com/countries/${countryId}`;

    useEffect(()=>{
        axios.get(apiUrl).then((response)=>{
            setCountry(response.data);
            console.log(country);
            setFetching(false);
    })
  }, [countryId])

    return(
        <div>
            <h1>Country Details</h1>
            {fetching? <p>Loading</p> :
            <div>
                <h1>Country Details</h1>
                <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} 
                alt={`Flag of ${country.name.common}`} />
                <h2>Country Name: {country.name.common}</h2>
                <p>Country Capital: {country.capital}</p>
                <p>Country Area: {country.area}</p>
                <p>Borders</p>
                <ul>
                    {country.borders.map((border, index) => (
                    <li key={index}>
                        <Link to={`/${border}`}>{border}</Link>
                    </li>
                ))}
                </ul>
            </div>
            }
        </div>
    )
}

export default CountryDetails;
