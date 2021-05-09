import React from 'react';
import { Link } from 'react-router-dom';

const CountriesList = ({ countries }) => {
    return(
        <div className="w-25">
            <div className='h-50'>
                <ul className='list-group overflow-scroll h-100'>
                    {
                        countries.map(({ name, alpha3Code, flag}) => {
                            return(
                                <Link key={alpha3Code}
                                    to={'/' + alpha3Code}>
                                    <li
                                        className='list-group-item'
                                        >
                                        <img src={flag} alt={name} style={{width: '28px'}}/>
                                        <span>{name}</span>
                                    </li>
                                </Link>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
        
    );
};

export default CountriesList;