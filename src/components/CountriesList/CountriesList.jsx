import countriesData from '../../countries.json'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";


const CountriesList = (props) => {

    

    return (
        <>
        <div className="col-5">
            <div className="list-group">
            <h1>Countries List</h1>
            {countriesData.map((country) => (
            <div key={country.name.official}>
            <Link to={country.alpha3Code}
            > <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="flag"/> 
                 {country.name.common}
            </Link>
          </div>
            ))}
            </div>
        </div>
        </>
    )
}

export default CountriesList



