import { Link } from "react-router-dom";
import './CountriesList.css'

const CountriesList = ({ countries }) => {

    return (
        <section className="SectionCountries">
            {
                countries.map((elm, idx) => {
                    const link = `/${elm.alpha3Code}`
                    const flag = `https://flagpedia.net/data/flags/icon/72x54/${elm.alpha2Code.toLowerCase()}.png`
                    return (
                        <div key={idx} className='CountriesList'>
                            < Link to={link} > Ir a {elm.name.common} <img src={flag} alt={elm.name.common} /> </Link>
                        </div>
                    )
                })
            }
        </section>

    )
}

export default CountriesList