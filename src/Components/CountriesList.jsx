import React, { useState, useEffect }  from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


function CountriesList() {
    const [countries, setCountries] = useState([])

    const getCountries = async () => {
        try {
        const response = await axios.get('https://ih-countries-api.herokuapp.com/countries');
        setCountries(response.data);
        console.log(response.data)
    } catch (error) {
        console.log(error);
    }
}

useEffect(() => {
    getCountries();
} , [countries])

return (
    <div>
        <h1>Countries</h1>
        <ul>
            {countries.map(country => (
                <li key={country.alpha3Code}>
                    <Link to={`/countries/${country.alpha3Code}`}>
                    <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="" />
                    <p>{country.alpha3Code}</p>
                    </Link>
                </li>
            ))}
        </ul>
    </div>


  )
}

export default CountriesList