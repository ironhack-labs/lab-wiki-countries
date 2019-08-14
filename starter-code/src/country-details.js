import React from 'react';
import countries from './countries.json';
import { Link } from 'react-router-dom';
import CountriesList from './countries-list'
// props.match.params es el objeto que guarda cada URL param

const countryDetails = props => {

    const getCountry = (cca3) => {
        const theCountry = oneCountry => {
            return oneCountry.cca3 === cca3;
        }
        return countries.find(theCountry)
    }

    const foundCountry = getCountry(props.match.params.id) // <== ojo
    return (
        <div className = "container">
            <div className = "row">
                <div className = "col-4">
                    <CountriesList />
                </div>
                <div className = "col-8">
                    <h2>{foundCountry.name.common} <span style={{ fontSize: "14px" }}></span></h2>
                    <h3>Capital: {foundCountry.capital}</h3>
                    <h3>Area: {foundCountry.area}</h3>
                    <ul>Borders: {foundCountry.borders.map(elm => <Link to ={`/${getCountry(elm).cca3}`}><li>{getCountry(elm).name.common}</li></Link>)}</ul>
                    <Link to='/'>Back</Link>
                </div>
            </div>
        </div>
    )
}

export default countryDetails;