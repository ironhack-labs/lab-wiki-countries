import './CountryDetails.css'
import countries from '../../countries.json'
import { Link } from 'react-router-dom';


const CountryDetails = (props) => {

    const { cca3 } = props.match.params;

    const foundCountry = countries.find(country => country.cca3 === cca3);

        return ( 
            <div className="country-details">
                <div class="col-7">
                    <h1>{foundCountry.name.common}</h1>
                    <table class="table">
                        <thead></thead>
                        <tbody>
                            {(foundCountry.capital.length !== 0 && foundCountry.capital[0] !== "" ) &&
                            <tr>
                                <td className="width-30">Capital</td>
                                <td>{foundCountry.capital}</td>
                            </tr>
                            }
                            
                            <tr>
                                <td>Area</td>
                                <td>
                                    {foundCountry.area} km
                                    <sup>2</sup>
                                </td>
                            </tr>
                            {foundCountry.borders.length !== 0 && 
                                <tr>
                                    <td>Borders</td>
                                    <td>
                                        <ul>
                                            {foundCountry.borders.map(borderCode => {
                                                const name = countries.find(country => country.cca3 === borderCode).name.common
                                                console.log(name)
                                                return (<li><Link to={`/${borderCode}`}>{name}</Link></li>)
                                            })}
                                        </ul>
                                    </td>
                                </tr>
                            }
                            
                        </tbody>
                    </table>
                </div>
            </div>
         )

}
 
export default CountryDetails;