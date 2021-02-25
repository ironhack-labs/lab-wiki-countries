import './CountryDetails.css'
import countries from '../../countries.json';


const CountryDetails = (props) => {

    const params = props.match.params
    console.log(params)

    const country = countries.find(country => country.cca2 === params.id)

    console.log(country)

    return (
        <>
        <div>
            <h3>{country.name.official}</h3>
            <p>Capital: {country.capital}</p>
            <p>Area: {country.area}</p>
            <p>Borders: {country.borders.map((elm, idx) => {
                return (
                    <ul>
                        <li key={idx} >{elm}</li>
                    </ul>
                )
            })}</p>
        </div>
        </>
    )
}

export default CountryDetails