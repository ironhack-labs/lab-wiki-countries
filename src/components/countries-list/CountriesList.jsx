import countriesJSON from '../../countries.json'
import CountryDetails from '../country-details/CountryDetails';
import { Link } from 'react-router-dom'

function CountriesList() {
    return (
        <div className="col-5" style={{ "maxHeight": 90 + "vh", "overflow": "scroll" }}>
            <div className="list-group">
                {countriesJSON.map((country, i) => {
                    return <Link key={i} to={`/countries/${country.cca3}`}>
                     {country.flag} {country.name.common}</Link>
                }
                )}
            </div>


        </div>

    )
}

export default CountriesList