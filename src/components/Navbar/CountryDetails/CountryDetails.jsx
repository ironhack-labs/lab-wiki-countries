import CountriesArray from "../../../countries.json"
import { useState } from "react"
import { Link, useParams } from "react-router-dom"


const CountriesDetails = () => {

    const [countries, setCountries] = useState(CountriesArray)

    const { countrie_id } = useParams()

    const foundCountrie = countries.find(elm => elm.alpha3Code === countrie_id)

    return (
        <>
            <h1>Detalles del País {foundCountrie.name.common}</h1>
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${foundCountrie.alpha2Code.toLowerCase()}.png`} alt=''></img>
            <hr />
            <p>{foundCountrie.name.common}</p>
            <Link to="/">Volver a paises</Link>
        </>
    )
}

export default CountriesDetails