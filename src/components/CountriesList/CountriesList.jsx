import { Link } from "react-router-dom"
import './CountriesList.css'


const CountriesList = ({ countries }) => {


    return (
        <div className="col-5">
            <div className="list-group">
                {
                    countries.map(elm => {

                        const flag = `https://flagpedia.net/data/flags/icon/72x54/${elm.alpha2Code}.png`

                        return (
                            <Link
                                className="list-group-item list-group-item-action CountriesList"
                                to={`/${elm.alpha3Code}`}
                                key={elm.alpha3Code}>
                                <img src={flag.toLowerCase()} alt={elm.alpha2Code} />
                                {elm.name.common}
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CountriesList
