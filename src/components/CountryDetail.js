import React, {useState, useEffect} from 'react'
import countries from '../countries.json'

const CountryDetail = ({match: {params: {cca3}}}) => {

    function singleCountry(code){
        const single = [...countries].filter(country => country.cca3 === code)[0]
        return single
        
    }

    const [country, setCountry] = useState(singleCountry(cca3))

    useEffect(() => {
        setCountry(singleCountry(cca3))
    }, [cca3])

    return (
        <div>
            <h2>{country.name.common}</h2>
    <p>Capital: {country.capital}</p>
    <p>Region: {country.region}</p>
    <p>Subregion: {country.subregion}</p>
    <p>Latitude and longitude: {country.latlng[0]}, {country.latlng[1]}</p>
        </div>
    )
}

export default CountryDetail
