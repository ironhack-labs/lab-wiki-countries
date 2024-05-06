import { Link } from "react-router-dom"

function CountriesList({ countries }) {

    return (
        <div className="list-group">
            {
                countries?.map(country =>
                    <Link className="list-group-item list-group-item-action"
                        to={`/${country.alpha3Code}`}
                        key={country._id}>
                        <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                            alt={country.alpha2Code} />
                        <br />
                        {country.name.common}
                    </Link>
                )
            }
        </div>
    )
}

export default CountriesList