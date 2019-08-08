import React from 'react'
import { Link } from 'react-router-dom';
import myCountries from "../countries.json";
import './CountryDetails.css'

export default function CountryDetails(props) {

    const getCountry = (cca3) => {
    return myCountries.find(Country => {
        return Country.cca3 === cca3;
    })
    };
    
    const countryName = props.match.params.cca3;
    const foundCountry = getCountry(countryName);

    if(foundCountry.capital === ""){
        foundCountry.capital = "N/A";
    }

    let borderingCountries = foundCountry.borders;
    if(borderingCountries.length === 0){
        debugger
        //get element by class borders, set style to display none
    }

    return (
    <div className="App-country-details">
        <div className="App-country-details-container">
            <h1>{foundCountry.name.common}</h1>
            <table>
                <tr>
                    <th>Capital</th>
                    <td>{foundCountry.capital.toString()}</td>
                </tr>
                <tr>
                    <th>Area</th> 
                    <td>{foundCountry.area} km²</td> 
                </tr>
                <tr>
                    <th>Borders</th>
                    <td>
                        <ul>
                            {borderingCountries.map((country) => {
                                return(
                                <li>
                                    <Link to={`/details/${country}`} >
                                    <div key={country}>
                                    {getCountry(country).name.common}
                                    </div>
                                    </Link>
                                </li>
                                )
                            })}
                        </ul>
                    </td>
                </tr>
            </table>
            <Link to='/'>Back</Link>
        </div>
    </div>
    )
  }
