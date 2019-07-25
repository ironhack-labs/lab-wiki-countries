
import React from 'react';
import {Link} from 'react-router-dom';
import countries from './../countries.json';

const CountryDetails = (props) => {
    
    const getCountry = (id) => {
        return countries.find((country) => {
            console.log(country.id);
            return country.cca3 === id
        })
    }
    const { params } = props.match;
    const foundCountry = getCountry(params.id);
    
    return (
        <div className="col-7">
            <h1>{ foundCountry.name.official }</h1>
            <table className="table">
                <thead />
                <tbody>
                    <tr>
                        <td style={{ width: '30%' }}>Capital</td>
                        <td>{ foundCountry.capital }</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>{ foundCountry.area } km
                <sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders </td>
                        <td>
                            <ul>
                                {
                                    Object.entries(foundCountry.borders).map(([key, value]) => {
                                        return <li><Link to={`/${ value }`}>{ value }</Link></li>
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

export default CountryDetails;
