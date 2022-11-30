import countriesData from "./../../countries.json";
import { Link, useParams } from "react-router-dom"
import { useState } from "react"

const CountryDetails = () => {

    const [countries, setCountries] = useState(countriesData)

    const { countryalpha3Code } = useParams()
    const bringCountry = countries.find(elm => elm.alpha3Code === countryalpha3Code)

    let borders = bringCountry.borders.map(borders => <Link to={`/countries-details/${borders}`}> {borders}  </Link>)
    console.log({ borders })



    return (

        <div>
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${bringCountry.alpha2Code.toLowerCase()}.png`} alt="FLAG" />
            <h1> {bringCountry.name.official}'s Details Here </h1>
            <h3>Capital: {bringCountry.capital}  </h3>
            <h3><b> Area: </b> {bringCountry.area}  </h3>
            {borders}
            {/* <h3><b> Borders: </b> {borders}  </h3> */}
            {/* <Link to={`/${borders}`}> {borders}  </Link> */}



            {/* <Link to="/">Go Back to Countries List </Link> */}
        </div>
    )

}


export default CountryDetails;

