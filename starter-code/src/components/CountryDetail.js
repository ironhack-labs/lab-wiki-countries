import React from 'react';
import { Link } from 'react-router-dom';
import data from "../countries.json"
const CountryDetails = (props) => {

    const getCountryById = (id =>{
        const result = data.find(country => country.cca3 === id);
        return result;
    })
    
    const {countryId} = props.match.params;
    const countryToDisplay = getCountryById(countryId);

    return(
        <div>
            <h1>Country Details</h1>
            <h2>{countryToDisplay.name.common}</h2>
            {
                countryToDisplay.capital.map(capital =>{
                    return <div>Capital: {capital}</div>
                })
            }
            {
                countryToDisplay.borders.map(country=>{
                    const countryBorder = data.find(code => code.cca3 === country)
                    return (
                        <div>
                            <Link to={`/${countryBorder.cca3}`}>
                                {countryBorder.name.common}

                            </Link>
                        </div>)
                })
            }
        </div>
    )

}
export default CountryDetails;