import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import countries from '../countries.json'
import './CountriesDetails.css'



function CountriesDetails() {
    const { id } = useParams()
    const country = countries.find((country) => country.alpha3Code === id)

    return (
        <div className="countriesDetails">
            COUNTRY DETAILS

            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4 border p-5">
                        <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt={country.name}></img>
                        <p className="fw-bold mt-2">{country.name.common}</p>
                    </div>
                    <div className="col-md-8 ;">
                        <div className="d-flex mt-4">
                            <h5 className="ms-5 card-title w-50">Capital</h5>
                            <p className="card-text w-50">{country.capital}📍</p>
                        </div>
                        <hr />
                        <div className="d-flex">
                            <h5 className=" ms-5 card-title w-50">Area</h5>
                            <p className="card-text w-50">{country.area} 🌎</p>
                        </div>
                        <hr />
                        <div className="w-90 d-flex ">
                            <h5 className="ms-5 card-title w-25">Borders</h5>
                            {country.borders.map((border) =>
                                <ul key={`${border}`}>
                                    <Link to={`/${border}`}>{border}</Link>
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </div>




        </div>
    )
}


export default CountriesDetails