import './CountryDetails.css'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
//import countries from './../../countries.json'


const CountryDetails = ({ countries }) => {

    const { id } = useParams()
    const countryDetails = countries.find(elm => elm.alpha3Code === id)
    console.log(countryDetails)

    const borderCountries = countries.filter(country => countryDetails.borders.includes(country.alpha3Code))


    console.log({ borderCountries })

    return (


        <div className="col-7">

            <h1>{countryDetails.name.common}</h1>
            <hr />

            <table className='details-table'>
                <thead></thead>
                <tbody>
                    <tr>
                        <td style={{ width: '30%' }}>Capital</td>
                        <td>{countryDetails.name.common}</td>
                    </tr>
                    <hr />
                    <tr>
                        <td>Area</td>
                        <td>
                            {countryDetails.area} km
                            <sup>2</sup>
                        </td>
                    </tr>
                    <hr />
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                                {borderCountries.map(country => {

                                    return (
                                        <li><Link to={`/${country.alpha3Code}`}> {country.name.common}</Link></li>
                                    )
                                }
                                )}
                            </ul>
                        </td>
                    </tr>
                </tbody>

            </table>

        </div >

    )
}

export default CountryDetails