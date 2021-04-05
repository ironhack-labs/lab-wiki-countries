import { Link } from 'react-router-dom'

export default function CountriesList({ countries }) {
    return (

        <div className="list-group">
            {countries.map((country) =>
                <Link
                    key={country.cca3}
                    className="list-group-item list-group-item-action"
                    to={`/${country.cca3}`}>{country.flag} {country.name.official}</Link>
            )}
        </div>

    )
}