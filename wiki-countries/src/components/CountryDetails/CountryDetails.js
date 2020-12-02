import './CountryDetails.css'
import countries from './../countries.json'
import { Link } from 'react-router-dom';


const Countrydetails = props => {

    const countryDetails = countries.filter(elm => elm.cca3 === props.match.params.country)
    const country = countryDetails[0]

    return (
        <section className="col-7">
            <h1>{country.name.common}</h1>
            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td>Capital</td>
                        <td>{country.capital}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>{country.area} km
                  <sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                                {country.borders.map(elm => <li key={elm}><Link to={elm}>{elm}</Link></li>)}
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    )
}

export default Countrydetails