import CountriesJson from "./../countries.json"
import { Link, useParams } from "react-router-dom"
import { useState } from "react"



function CountryDetails() {

    const [country, setCountry] = useState(CountriesJson)

    const { country_id } = useParams()

    const foundCountry = country.find(elm => elm.alpha3Code === country_id)

    return (
        <>

            <img class="flag" src={`https://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLowerCase()}.png`}
                alt="country flag" />
            <h1>{foundCountry.name.official}</h1>
            <hr />
            <p>Capital:  {foundCountry.capital}</p>
            <p>Area:  {foundCountry.area} km2</p>
            <ul>Borders:
                <br></br>
                {foundCountry.borders.map(elm =>
                    <Link to={`/countries/${elm}`} className="borders" key={elm}>{elm}
                    </Link>)}


            </ul>




        </>
    )




}
export default CountryDetails