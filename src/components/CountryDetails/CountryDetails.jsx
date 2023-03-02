import './CountryDetails.css'
import { Link, useParams } from "react-router-dom"

const CountryDetails = ({ countries }) => {

    const { country_id } = useParams()

    const country = countries.find(elm => elm.alpha3Code === country_id)

    return (
        <div className="row justify-content-center">
            <section className='col-7 '>
                <div className="text-center">
                    <img className='flagPic' src={`https://flagpedia.net/data/flags/icon/128x96/${country.alpha2Code.toLowerCase()}.png`} alt="" />
                    <h1>{country.name.common}</h1>
                </div>
                <hr />
                <p><strong>Capital:</strong> {country.capital}</p>
                <p><strong>Area:</strong> {country.area} km2</p>
                <p><
                    strong>Borders:</strong>
                    {country.borders.map(elm => {
                        return (
                            <span>
                                <Link to={`/${elm}`} >{elm} </Link>
                            </span>
                        )
                    })}
                </p>
            </section>
        </div>
    )
}

export default CountryDetails