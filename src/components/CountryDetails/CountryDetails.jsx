import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import countriesData from '../../countries.json'

const CountryDetails = () => {



    const [country, setCountry] = useState({})
    const {alpha3Code} = useParams()

    useEffect(() => {
    const findAlpha3Code = countriesData.find((country) => country.alpha3Code === alpha3Code)
    setCountry(findAlpha3Code)
    }, [alpha3Code])

    return(
        <div>
            {<h1>{country?.name.common}</h1>}
            {<p>{country?.capital[0]}</p>}
            {<p>{country?.area}</p>}
            {<p>{country?.borders}</p>}
        </div>
    )
    

    
}

export default CountryDetails