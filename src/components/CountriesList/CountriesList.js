import countries from '../../countries.json'
import { Link } from 'react-router-dom'

export default function CountriesList() {

    const displayCountries = () => {

        return (
            countries.map((country, idx) => {

                return (

                    <div>

                        <Link to={`/country-details/${country.cca3}`}>{country.flag} {country.name.common}</Link>

                    </div>
                )
            })
        )
    }

    return (
        <div>
            {displayCountries()}
        </div>
    )

}
