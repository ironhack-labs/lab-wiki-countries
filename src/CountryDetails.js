import countries from "./countries.json"
import { Link } from 'react-router-dom'


const CountryDetails = props => {

    const getCountry = (cca3) => {

        const theCountry = oneCountry => {
            return oneCountry.cca3 === cca3
        }
        return countries.find(theCountry)
    }

    const { params } = props.match;
    const foundCountry = getCountry(params.cca3, 10);

    return (
        <>
            <div className="col-7">
                <h1>{foundCountry.name.common}</h1>
                <table className="table">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td style={{ width: '30%' }}>
                                Capital
                            </td>
                            <td>{foundCountry.capital}</td>
                        </tr>
                        <tr>
                            <td>Area</td>
                            <td>
                                {foundCountry.area} km
                                <sup>2</sup>
                            </td>
                        </tr>
                        <tr>
                            <td>Borders</td>
                            <td>
                                <ul>

                                    {
                                        foundCountry.borders.map(elm =>
                                            <li>
                                                <Link to={`/${elm}`} style={{ textDecoration: 'none' }}>
                                                    {elm}
                                                </Link>
                                            </li>
                                        )
                                    }
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default CountryDetails