import React from 'react';
import { Link } from 'react-router-dom';

// const CountriesList = ({ countries }) => {
const CountriesList = ({ countries }) => {
    return(
        <div className="w-25">
            <div className='h-50'>
                <ul className='list-group overflow-scroll h-100'>
                    {
                        countries.map(country => <Link to={'/' + country.cca3}><li className='list-group-item' key={country.cca3}>{country.flag + ' ' + country.name.common}</li></Link>)
                    }
                </ul>
            </div>
        </div>
        
    );
};

export default CountriesList;