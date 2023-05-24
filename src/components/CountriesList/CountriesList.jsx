import { Link } from "react-router-dom"

const CountriesList = ({ countries }) => {

    return (

        countries.map(country => {

            let img = `https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`

            return (
                <>
                    <div key={country.tld} className="list-group">
                        <Link to={`/${country.alpha3Code}`}>
                            <div className="list-group-item list-group-item-action">
                                <img src={img} alt={country.name.common} />
                                <p>{country.name.common}</p>
                            </div>
                        </Link>
                    </div>
                </>
            )
        })
    )
}


export default CountriesList