import countries from './../countries.json'
import { Link } from 'react-router-dom'



const CountryDetails = cca3 => {

    const findCountry = (cca3) => {
        let countryPassed = countries.find(elm => elm.cca3 === cca3.cca3)
        console.log(countryPassed)
        return countryPassed
    }

    const country = findCountry(cca3)
    console.log(country.borders)

    return (
        <div className="col-7">
            <h1>{country.name.common}</h1>
            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td >Capital</td>
                        <td>{country.capital}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td> {country.area} km <sup>2</sup></td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                                {country.borders.map((elm, i) => {
                                    return (
                                        <li key={i}>
                                            <Link to={`/${elm}`}> {elm} </Link>
                                        </li>
                                    )
                                })}

                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CountryDetails