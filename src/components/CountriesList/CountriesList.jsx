import './CountriesList.css'
import { Link, NavLink } from "react-router-dom"

const CountriesList = ({ countries }) => {

    return (
        <section style={{ "maxHeight": "90vh", "overflow": "scroll" }}>
            {countries.map(elm => {
                return (
                    <div className="list-group-item list-group-item-action">
                        <img className="flag" src={`https://flagpedia.net/data/flags/icon/72x54/${elm.alpha2Code.toLowerCase()}.png`} alt="" />
                        <Link to={`/${elm.alpha3Code}`} key={elm.alpha3Code}>
                            {elm.name.common}
                        </Link>
                    </div>

                )
            })}
        </section >
    )
}

export default CountriesList