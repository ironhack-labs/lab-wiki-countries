import { Link, useParams } from "react-router-dom"

const CountryDetails = ({ countriesJSON }) => {
    
    const { id } = useParams()

    const country = countriesJSON.find(elm => elm.alpha3Code === id)


    console.log(country)
    return (
        <>                        
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}/>    
            <h1>{country.name.common} details</h1>
            <hr />
            <p>Capital: {country.capital}</p>
            <p>Area: {country.area}</p>
            <p>Borders: {country.borders}</p>
        </>
    )
}

export default CountryDetails