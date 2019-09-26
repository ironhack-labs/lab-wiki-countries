import React from 'react'
import countries from '../../countries.json'
import {Link} from 'react-router-dom'


export default function CountryContainer(props){

    const findCountry = (cca3) => {
        return countries.find(country => {
            return country.cca3 === cca3
        })
    }

    const {params} = props.match
    const theCountry = findCountry(params.cca3)
    const theCountryName = theCountry.name.common
    const theCountryCapital = theCountry.capital[0]
    const theCountryArea = theCountry.area
    const theCountryBorders = theCountry.borders

    return(
        <div className="col-7">
        <h1>{theCountryName}</h1>
        <table className="table">
            <thead></thead>
            <tbody>
                <tr>
                    <td>Capital</td>
                    <td>{theCountryCapital}</td>
                </tr>
                <tr>
                    <td>Area</td>
                    <td>{theCountryArea} km
                    <sup>2</sup></td>
                </tr>
                <tr>
                    <td>Borders</td>
                    <td>
                        <ul>
                            {theCountryBorders.map((el) => <Link key={el} to={`/countries/${el}` }><li>{el}</li></Link>)}
                        </ul>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
    )
}