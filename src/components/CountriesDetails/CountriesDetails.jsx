import countriesAll from './../../countries.json'
import { Link, useParams } from "react-router-dom"
import { useState } from "react"


function CountriesDetails()  {

    const [country, setCountry] = useState(countriesAll)

    const {country_id} = useParams()

    const foundCountry = country.find(elm => elm.alpha3Code === country_id)
       
    return (
        <div>            
        <p>{foundCountry.name.official}</p>
        </div>
    )
}

export default CountriesDetails