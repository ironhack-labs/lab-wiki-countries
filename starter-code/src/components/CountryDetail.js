import React from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';

const CountryDetails  = (props) => {

    const countryID = props.match.params.id;
    
    console.log("COUNTRY ID",countryID);

    const country = countries.find(oneCountry => oneCountry.cca3 === countryID);
    console.log(country);
    return(
        
        <div className="col-7">
            <h1>{country.name.common}</h1>
            <table className="table">
            <thead></thead>
            <tbody>
                <tr>
                <td style={{width: "30%"}}>Capital</td>
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
                    {
                        country.borders.map((border, idx) => {

                            const countryBorder = countries.filter(oneCountry => oneCountry.cca3 === border)[0];
                        
                            return (
                                <div key={idx}>
                                    <li>
                                        <Link to={`/countrydetail/${countryBorder.cca3}`}>{countryBorder.name.common}</Link>
                                    </li>
                                </div>
                        );})
                    }
                    </ul>
                </td>
                </tr>
            </tbody>
            </table>
      </div>
    );
}

export default CountryDetails;