import './CountryDetails.css'
import { Link } from 'react-router-dom'
import countries from './countries.json'


const CountryDetails = props => {

    const country = countries.filter(elm => elm.cca3 === props.match.params.cca3)
    console.log(country[0].name.common)

    return(
        <div>
            <hr></hr>
            <h1>{country[0].name.common}</h1>
            <h3>Capital: {country[0].capital}</h3>
            <h3>Area: {country[0].area}</h3>
            <h3>Borders: {country[0].borders}</h3>
            <hr></hr>
        </div>
    )
}

export default CountryDetails