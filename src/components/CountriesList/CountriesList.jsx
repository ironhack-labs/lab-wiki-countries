import { Link } from "react-router-dom";
import "./CountriesList.css"

const CountriesList = ({ countries }) => {

    return (
        <>
            {
                countries.map((elm, idx) => {
                    const imageUrl = `https://flagpedia.net/data/flags/icon/72x54/${elm.alpha2Code.toLowerCase()}.png`

                    return (

                        <div className="card" key={idx}>
                            <img src={imageUrl} className="card-img-top" alt="" />
                            <div className="card-body">
                                <Link to={`/countries-details/${elm.alpha3Code}`}>{elm.name.common}</Link>
                            </div>
                        </div>
                    )
                })
            }
        </>

    )
}

export default CountriesList