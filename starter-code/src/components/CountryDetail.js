import React from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';

// props.match.params es el objeto que guarda cada URL param

const CountryDetails = props => {
    //console.log(props)
    const getCountry = (id) => {
        const theCountry = oneCountry => {
            return oneCountry.cca3 === id;
        }
        return countries.find(theCountry)
    }

    const foundCountry = getCountry(props.match.params.id) // <== ojo

    let countryArr = []
    foundCountry.borders.forEach((elm, idx) =>{
        let myCountry = getCountry(elm)
        
        countryArr.push(<li key={idx}><Link to={`/${myCountry.cca3}`}>{myCountry.name.common}</Link></li>)
    })
     return (
           
            <div className="details">
                <h2 className="country">{foundCountry.name.common}</h2>
                <hr/>
                <h3>Capital: {foundCountry.capital[0]}</h3>
                <hr/>
                <h3>Area: {foundCountry.area} km2</h3>
                <hr/>
                <ul>Borders: 
                    {countryArr}
                </ul> 
             </div>

    
    )
}

export default CountryDetails;