import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HomePage() {

    const[countries, setCountries] = useState([])

    useEffect(() =>{
        axios.get('https://ih-countries-api.herokuapp.com/countries')
        .then((response) => {
            setCountries(response.data)
            console.log(response.data)
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
    }, [])
    return(
        <div>
        <h2>WikiCountries: Your Guide to the World</h2>
        <ul>
        {countries.map((country) => (
          <li key={country.alpha3Code}>
            <Link to={`/${country.alpha3Code}`}>
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                 style={{ width: '36px', marginRight: '10px' }}
            />
            {country.name.common}
            </Link> 
          </li>
        ))}
        </ul>
        </div>
    )
}

export default HomePage;
