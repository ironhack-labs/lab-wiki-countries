import { Link } from "react-router-dom";

const CountriesList = ({ countries }) => {

    return (
        <div className="List">
            {
                countries.map(elm => {

                    return (
                        <Link className="Country" to={elm.alpha3Code}>
                            <p key={elm.alpha3Code}>{elm.name.common}</p>
                            <img src={`https://flagpedia.net/data/flags/icon/72x54/${elm.alpha2Code.toLowerCase()}.png`} alt="flag" />
                        </Link>
                    )

                })
            }
        </div>

    )


}

export default CountriesList    