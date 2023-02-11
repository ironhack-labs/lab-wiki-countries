import './styles.css'
import React from 'react';

function CountryList({props}){
    return (
        <ul className='country-list'>
            {props.map((prop, index)=>(
                <li className='country-item' key ={index}>
                    {prop}
                </li>
            ))}
        </ul>
    )
}

export default CountryList;