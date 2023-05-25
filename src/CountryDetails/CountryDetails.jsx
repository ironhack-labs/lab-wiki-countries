import { useParams } from "react-router-dom"
import Countries from '../countries.json'
import { Link } from "react-router-dom";
const CountryDetails = () => {

    const { country_id } = useParams()

    const selectedCountry = Countries.find(elm => elm.alpha3Code === country_id)

    console.log(selectedCountry)
    return (
        <div>
            <h1>Country Details</h1>

            <div className="Country">
                <img src={`https://flagpedia.net/data/flags/icon/72x54/${selectedCountry.alpha2Code.toLowerCase()}.png`}></img>
                <h3>Name</h3>
                <p>{selectedCountry.name.common}</p>
            </div>
            <div className="Capital">
                <h3>Capital</h3>
                <p>{selectedCountry.capital}</p>
            </div>
            <div className="Area">
                <h3>Area</h3>
                <p>{selectedCountry.area}</p>
            </div>
            <h3>Borders</h3>
            <div>
                {selectedCountry.borders.map((border, i) => {
                    return (
                        <div key={i} className="col-5">
                            <Link to={`/${border}`}>{border}</Link>
                        </div>
                    )
                })}

            </div>

        </div>

    )
}
export default CountryDetails