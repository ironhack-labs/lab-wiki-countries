import { Link } from 'react-router-dom'
import countries from '../countries.json'


const CountryDetails = props => {

    console.log('ESTE ES EL OBJETO DE PROPS DE RRD', props)

    const { cca3 } = props.match.params

    return (
        <div className="col-7">
            <h1>{countries.name.common}</h1>
            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td style={{ width: "30%" }}>Capital</td>
                        <td>{countries.capital[0]}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>
                            {countries.area} km
                            <sup>2</sup>
                        </td>
                    </tr>
                    {/* <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                                {countries.map(elm => <li><Link className="list-group-item list-group-item-action" to={cca3}>{cca2} {name.common}</Link>
                                </li>)}
                                <li><a href="/AND">Andorra</a></li>
                                <li><a href="/BEL">Belgium</a></li>
                                <li><a href="/DEU">Germany</a></li>
                                <li><a href="/ITA">Italy</a></li>
                                <li><a href="/LUX">Luxembourg</a></li>
                                <li><a href="/MCO">Monaco</a></li>
                                <li><a href="/ESP">Spain</a></li>
                                <li><a href="/CHE">Switzerland</a></li>
                            </ul>
                        </td>
                    </tr> */}
                </tbody>
            </table>
        </div>

    )
}

export default CountryDetails