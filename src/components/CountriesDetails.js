import React from 'react';
import {Link} from 'react-router-dom';

function CountryDetails(props) {

    let cca3 = props.match.params.cca3;
    
    let selectCountry = props.countries.find((country) => {
        return country.cca3 === cca3
    })

    return (
    <div className="col-7">
        <h1>{selectCountry.name.common}</h1>
        <table className="table">
            <thead></thead>
        <tbody>
            <tr>
            <td style={{width: '30%'}}>Capital</td>
            <td>{selectCountry.capital}</td>
            </tr>
            <tr>
            <td>Area</td>
            <td>{selectCountry.area} km
                <sup>2</sup>
            </td>
            </tr>
            <tr>
            <td>Borders</td>
            <td>
                <ul>
                {
                selectCountry.borders.map((country) => {
                    return <li><Link to={`/countries/${country}`}>
                        {props.countries.map((elem) => {
                                return elem.cca3 === country ? elem.name.common : null;
                            })
                        }
                        
                        </Link></li>
                    })
                }
                </ul>
            </td>
            </tr>
        </tbody>
        </table>
    </div>
    )
    
}

export default CountryDetails
