import { Link } from "react-router-dom"

const CountryList = ({ countries }) => {

    return (
        <>
            {
                countries.map(elm => {
                    return (
                        <div className="col-md-5 mt-3" key={elm.alpha2Code}>
                            <div  >
                                <img
                                    src={`https://flagpedia.net/data/flags/icon/72x54/${elm.alpha2Code.toLowerCase()}.png`}
                                    alt={elm.alpha2code} className="me-3" />
                                <Link to={`/${elm.alpha3Code}`} >Ver Detalles</Link>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}
export default CountryList