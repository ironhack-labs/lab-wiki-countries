import './CountriesDetails.css'
import './../App.css'
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const CountriesDetails = ({ countries }) => {

    const { country_id } = useParams()

    // const [countriesRender, setCountries] = useState([])

    // useEffect(() => {
    //     setCountries(countries)
    // }, [])

    const selectedCountry = countries.find(country => country.alpha3Code === country_id)

    return (
        <div className='col-7'>
            <h1>Detalle del País</h1>
            <hr />
            <div >
                <img src={`https://flagpedia.net/data/flags/icon/72x54/${selectedCountry.alpha2Code.toLowerCase()}.png`} alt={selectedCountry.name.common} className='ImageDetail mb-3' />
                <h2 className='mb-3'>{selectedCountry.name.common}</h2>
                <table className="table">
                    <thead></thead>
                    <tbody>

                        <tr>
                            <td><strong>Capital:</strong></td>
                            <td>{selectedCountry.capital}</td>
                        </tr>

                        <tr>
                            <td><strong>Area:</strong></td>
                            <td>
                                {selectedCountry.area} km<sup>2</sup>
                            </td>
                        </tr>

                        <tr>
                            <td><strong>Borders:</strong></td>
                            <td>
                                <ul className='list-unstyled col'>
                                    {
                                        selectedCountry.borders.map(elm => {
                                            return (
                                                <li key={elm}><Link to={`/${elm}`}>{elm}</Link></li>
                                            )
                                        })
                                    }
                                </ul>
                            </td>
                        </tr>



                    </tbody>
                </table>

            </div>
        </div>
    )

}

export default CountriesDetails