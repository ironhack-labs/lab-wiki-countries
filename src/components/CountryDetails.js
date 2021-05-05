import './CountryDetails.css'
import countriesList from './../countries.json'
import { Link } from 'react-router-dom'

const CountryDetails = props => {

    const country = countriesList.find(country => country.cca3 === props.match.params.id)

    const borderedCountry = country.borders.map( elm => countriesList.find(country => country.cca3 === elm))

    return (
        <section className="countries details">
            <h1>{country.name.official}</h1>
            <hr></hr>
            <p><b>Capital:</b> {country.capital}</p>
            <hr></hr>
            <p><b>Area:</b> {country.area}</p>
            <hr></hr>
            <p><b>Borders:</b></p>
            {borderedCountry.map( elm => <li><Link to={elm.cca3}>{elm.name.official}</Link></li>)}
            
        </section>
    )

}

export default CountryDetails