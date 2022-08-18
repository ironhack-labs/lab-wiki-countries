import { useParams } from 'react-router-dom'
import React, { useState, useEffect }  from 'react'
import axios from 'axios'


function CountryDetails(props) {
    const { countryCode } = useParams()
    const {foundCountry} = props
    const [country, setCountry] = useState({})

    const getCountries = async () => {
        try {
        const response = await axios.get(`https://ih-countries-api.herokuapp.com/countries/' + countryCode`);
        setCountry(response.data);
        console.log(response.data)
    } catch (error) {
        console.log(error);
    }
}   

useEffect(() => {
    getCountries();
} , [country])

    const countryFound = foundCountry.find((country) => country.alpha3Code === countryCode)
    console.log(countryFound)

return (
    <div>
    <h1>Country Details</h1>
    {!countryFound && <p>Country not found</p>}


    {countryFound && (
        <div>
            <h1>{countryFound.country.name.common}</h1>
            <p>Capital: {countryFound.capital}</p>
            <img src={countryFound.flag.png} alt={countryFound.name.common} />
        </div>
    )}
    </div>
  )
}
export default CountryDetails