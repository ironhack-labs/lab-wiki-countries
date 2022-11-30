import countriesData from "./../../countries.json"
import { useParams } from "react-router-dom"
import { useState } from "react"

function CountryDetails() {

    const [countries, setCountries] = useState(countriesData)
    const { alpha3Code } = useParams()
    console.log(alpha3Code)

    const foundCountry = countries.find(elm => elm.alpha3Code === alpha3Code)
    console.log(foundCountry)


    return <>
        <h1>Detalles de pais, </h1>
        <hr></hr>
        <h1>{foundCountry.name.common}</h1>
        <h3>{foundCountry.capital[0]}</h3>
        <h3>{foundCountry.languages.eng}</h3>
        <h4>{foundCountry.region}</h4>
        <h4>{foundCountry.subregion}</h4>
        <img src={`https://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLowerCase()}.png`} alt="" />





    </>

}

export default CountryDetails 
