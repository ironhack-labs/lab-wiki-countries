import { Link } from 'react-router-dom'
import '../App.css'


const CountriesList = ({ countries }) => {
    return (
        <section>
            {
                countries.map(elm => {
                    return (
                        <Link to={`/${elm.alpha3Code}`} key={elm.alpha3Code}>
                            <img src={`https://flagpedia.net/data/flags/icon/72x54/${elm.alpha2Code.toLowerCase()}.png`} alt={`Flag of ${elm.name.common}`} />
                            <p>{elm.name.common}</p>
                        </Link>
                    )
                })
            }
        </section>
    )
}

export default CountriesList


