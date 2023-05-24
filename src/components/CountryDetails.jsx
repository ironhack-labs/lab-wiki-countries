import { useParams } from "react-router-dom";
// import countries from "../../src/countries.json"

const CountryDetails = ({ countries }) => {
    const { alpha3Code } = useParams()
    const selectedCountry = countries.find(country => country.alpha3Code === alpha3Code)


    return (
        <div className="countryDetails">
            <img src={`https://flagpedia.net/data/flags/icon/120x90/${selectedCountry.alpha2Code.toLowerCase()}.png`} alt="" />
            <h1>{selectedCountry.name.common}</h1>
            <p>Capital: {selectedCountry.capital}</p>
            <p>Area:{selectedCountry.area} </p>
        </div>
    )
}

export default CountryDetails