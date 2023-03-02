import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";


const CountryDetails = ({ countries }) => {
    const { id } = useParams()
    const country = countries.find(elm => elm.alpha3Code === id)
    return <>
        <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="Country Flag"></img>
        <h1>{country.name.common}</h1>
        <p><b>Capital: </b>{country.capital}</p>
        <p><b>Area: </b>{country.area}</p>
        <article>{country.borders.map(elm => {
            return (<p>{elm}</p>)
        })}</article>


    </>
}

export default CountryDetails