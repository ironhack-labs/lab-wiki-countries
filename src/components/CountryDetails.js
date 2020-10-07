import React from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';

const findCountry = (cca3) => {
    return countries.find(country => country.cca3 === cca3);
}
    
export default function CountryDetails(props) {
    console.log({props})
    const { params } = props.match;
    const country = findCountry(params.cca3);


    return (
        <div className="col-7">
          <h1>{country.name.common}</h1>
          <table className="table">
            <thead></thead>
            <tbody>
                <tr>
                    <td style={{width: "30%"}}>Capital</td>
                    <td>{country.capital[0]}</td>
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
                            {
                                country.borders.map(item => 
                                    <li key={item}><Link to={`/${item}`}>{findCountry(item).name.common}</Link></li>
                                )
                            }
                        </ul>
                    </td>
                </tr>
            </tbody>
          </table>
        </div>
    )
}
