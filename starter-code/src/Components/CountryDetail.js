import React from 'react';
import countries from '../countries.json';
import {Link} from 'react-router-dom';



export const CountryDetail = (props) => {
    const {params} = props.match.params;
    const handleCountry = country  => countries.find(obj.cca3 === country );
    const showCountry = handleCountry(params.country);

    return (
        <div>
            <h1>{showCountry.name.common}</h1>
            <h2>Capital:{showCountry.capital}</h2>
            <h2>Area:{showCountry.area} km²</h2>
            <h2>Borders:</h2>
            <p>{showCountry.borders.map((moreCountries,index) => {
                return(
                    <li key= {index} >
                     <Link to={handleCountry(moreCountries).cca3}> {handleCountry.name.official} </Link>
                    </li>
                )
            })}</p>
        </div>
    )
}

export default CountryDetail;