import React from "react";
import { NavLink } from 'react-router-dom';

function CountriesList(props) {

    const renderCountries = () => {
        const result = props.countries.map(e => {
            return (
                <div className='countrie'>
                    <NavLink to={`/${e.alpha3Code}`}>
                        <h4>{e.name.official}</h4>
                    </NavLink>
                </div>
            );
        });
        return result;
    }


    return (
        <div>
            {renderCountries()}
        </div>
// for later if getting data from API
/* <>
{!props.countries ? <p>loading...</p> : renderCountries()}
</> */
    )
}

export default CountriesList;