import React from 'react';
import {Link} from 'react-router-dom';

export default function CountryDetails(props) {

    let cca3 = props.match.params.cca3;
    let chosenCountry = props.countries.find((country) => {
        return country.cca3 === cca3
    })

    return (
    <div className="col-7">
        <h1>{chosenCountry.name.common}</h1>
        <table className="table">
            <thead></thead>
        <tbody>
            <tr>
            <td style={{width: '30%'}}>Capital</td>
            <td>{chosenCountry.capital}</td>
            </tr>
            <tr>
            <td>Area</td>
            <td>{chosenCountry.area} km
                <sup>2</sup>
            </td>
            </tr>
            <tr>
            <td>Borders</td>
            <td>
                <ul>
                {
                    chosenCountry.borders.map((country) => {
                        return <li><Link to={`/countries/${country}`}>
                        {
                            props.countries.map((elem) => {
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




            
