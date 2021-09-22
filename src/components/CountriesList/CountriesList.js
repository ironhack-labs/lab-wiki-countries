import countriesList from './../../countries.json'
import './CountriesList.css'
import { Link } from 'react-router-dom'

export default function CountriesList() {

    const displayCountries = () => {

        return (

            countriesList.map((country, idx) => {
                return (

                    <div key={idx} className="list-group">
                        <Link to={`/${country.cca3}`} className="list-group-item list-group-item-action">{country.flag} - {country.name.common}</Link>
                    </div>
                )
            })
        )
    }

    return (

        displayCountries()

    )
}
