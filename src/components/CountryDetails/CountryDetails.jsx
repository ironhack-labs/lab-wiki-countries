// import './CountryDetails.css'
import { useParams } from "react-router-dom"

const CountryDetails = ({ countriesFromApi }) => {

    const { countryId } = useParams()

    const foundCountry = countriesFromApi.find(elm => elm.alpha3Code === countryId)
    console.log(foundCountry)
    return (
        <div>
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLowerCase()}.png`} alt="" />
        </div>

    )

}

export default CountryDetails