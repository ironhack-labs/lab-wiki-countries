import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

const CountryDetails = ({ countries }) => {

    const { id } = useParams()
    const country = countries.find(elm => elm.alpha3Code === id)
    const { name, capital, area, borders, alpha2Code, alpha3Code } = country

    return (
        < div key={alpha3Code} className="country" >
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${alpha2Code.toLowerCase()}.png`} alt={`${name.official}`} />
            <h2>{name.official}</h2>
            <p><b>Capital:</b> {capital}</p>
            <hr />
            <p><b>Area:</b> {area} Km</p>
            <hr />
            <div>
                <p className="inline"><b>Borders:</b></p>
                <div className="inline">
                    <ul>
                        {
                            borders.map((elm) => {
                                return <li key={elm}>
                                    <Link to={`/${elm}`} >
                                        {elm}
                                    </Link>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default CountryDetails


// capital
// area
// borders