
import {Link} from 'react-router-dom';
import DataCountries from '../countries.json'

const CountryDetails = ({location,history,match}) => (
    <div className="col-7">
        <h1>{location.state.name.official}</h1>
        <table className="table">
            <thead></thead>
            <tbody>
            <tr>
                <td style={{width: "30%"}}>Capital</td>
                <td>{location.state.capital[0]}</td>
            </tr>
            <tr>
                <td>Area</td>
                <td>
                {location.state.area} km
                <sup>2</sup>
                </td>
            </tr>
            <tr>
                <td>Borders</td>
                <td>
                <ul>{
                    location.state.borders.map((border, index_c)=> {
                    const country = findCountry(border);
                    return (
                        <li key={index_c}>
                            <Link
                                to={{
                                    pathname:"/details",
                                    state:country
                                }}
                            >
                                {country.name.official}
                            </Link>
                        </li>
                    )})}
                </ul>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
)

function findCountry(shortName) {
    const index = DataCountries.findIndex((element, index) => {
        if (element.cca3 === shortName || element.cca2===shortName) {
          return true
        }
    })
    return DataCountries[index];
}

export default CountryDetails;