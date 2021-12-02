import React from 'react'
import jsonCountries from '../countries.json';
import BorderItem from './BorderItem';

const CountryDetails = (props) => {

    const filteredCountry = jsonCountries.find(eachCountry => eachCountry.cca3 === props.match.params.cca3)

    const borders = filteredCountry.borders

    return (

        <div className="col-7">
            <h1>{filteredCountry.name.common}</h1>
            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td style={{width:"30%"}}>Capital</td>
                        <td>{filteredCountry.capital}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>
                            {filteredCountry.area} km
                            <sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                                {borders.map(eachBorder => {
                                    return (
                                        <BorderItem border={eachBorder} />
                                    )
                                }
                                )}
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}




export default CountryDetails