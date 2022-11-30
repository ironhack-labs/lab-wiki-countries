import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
// import Countries from "../../countries.json"

function CountryDetails() {

    const [countries, setCountriesDetails] = useState([])

    useEffect(() => {
        fetch('https://ih-countries-api.herokuapp.com/countries')
            .then(res => res.json())
            .then(countriesData => setCountriesDetails(countriesData))
    }, [])


    const { countries_id } = useParams()

    const foundCountries = countries?.find(elm => elm.alpha3Code === countries_id)

    return (
        <div>
            <h1>Detalles de Countries {foundCountries?.name.common}</h1>
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${foundCountries?.alpha2Code.toLowerCase()}.png`} alt="country flag" />
            <h1>Región {foundCountries?.region}</h1>
            <hr />
            <Link to="/">Volver a los proyectos</Link>
        </div>
    )
}

export default CountryDetails