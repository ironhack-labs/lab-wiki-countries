import { Link } from 'react-router-dom'

export default function CountriesList({ countries }) {
    console.log(countries)
    return (
        <div className="list-group">
            {countries.map((country) =>
                <Link
                    key={country.alpha3Code}
                    className="list-group-item list-group-item-action"
                    to={`/${country.alpha3Code}`}>
                    <img style={{height: '50px', maxWidth:'70px', marginRight: '20px'}} src={country.flag}/>{country.name}</Link>
            )}
        </div>

    )
}