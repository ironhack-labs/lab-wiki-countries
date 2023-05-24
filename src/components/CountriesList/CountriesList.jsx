import './CountriesList.css'
import './../App.css'
import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";

const CountriesList = ({ countries }) => {

    // const [countriesRender, setCountries] = useState([])

    // useEffect(() => {
    //     setCountries(countries)
    // }, [])

    return (
        <div class="col-5" style={{ overflow: 'scroll', maxHeight: "90vh" }}>
            <h1>Listado de Paises</h1>
            <hr />
            {
                countries.map(country => {
                    return (
                        <div key={country.alpha3Code} className='list-group'>
                            <Link className='list-group-item list-group-item-action' to={`/${country.alpha3Code}`}>
                                <div className='mb-3'>
                                    <span> <strong> {country.name.official}</strong></span>
                                </div>
                                <div>
                                    <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt={country.name.official} />
                                </div>
                            </Link>

                        </div>
                    )
                })
            }
        </div >
    )

}

export default CountriesList