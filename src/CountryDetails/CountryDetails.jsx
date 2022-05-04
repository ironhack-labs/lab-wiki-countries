import { useParams } from "react-router-dom"
import './CountryDetails.css'

function CountryDetails({ countries }) {

    const { alpha3Code } = useParams()

    const foundCountry = countries.find((oneCountry) => {
        return oneCountry.alpha3Code === alpha3Code;
    });

    return (
        <div className="details">
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLowerCase()}.png`}></img>
            <h5>{foundCountry.name.official}</h5>
            <p>Capital: {foundCountry.capital}</p>
            <p>Area: {foundCountry.area}</p>


        </div>
    )

}

export default CountryDetails
