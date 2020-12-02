import './CountryDetails.css'
import { Link } from 'react-router-dom'

const CountriesDetails = props => {
    
    const selectedCountry = props.countries.filter(elm => elm.cca3 === props.match.params.countryCode)
    
    return (
    <article>
        {selectedCountry.map(elm => {
            return(
                <section>
                    <h1>{elm.name.common}</h1>
                    <hr />
                    <div className="property">
                        <p className="property-title">Capital:</p><p> {elm.capital}</p>
                    </div>
                    <hr />
                    <div className="property">
                        <p className="property-title">Area:</p><p> {elm.area} km<sup>2</sup></p>
                    </div>
                    <hr />
                    <div className="property">
                        <p className="property-title">Borders:</p>
                        <ul>
                            {elm.borders.length ? elm.borders.map(country => props.countries.filter(elm => elm.cca3 === country).map(elm => <li><Link to={elm.cca3}>{elm.name.common}</Link></li>)): 'This country has no bordering countries'}
                        </ul>
                    </div>
                </section>
            )
        }
    )}
    </article>
    )
}

export default CountriesDetails