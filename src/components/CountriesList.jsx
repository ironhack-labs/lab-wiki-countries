import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


function CountriesList(props) {

    const list = props.countries.map(c => (
        <div key={c.alpha3Code}>
            <button
                className='btn btn-outline-info'
                onClick={props.showCountry.bind(null, c)}
            >
                {c.name}
            </button>
        </div>
    ))
    return (
        <div>
            {list}
        </div>
    )
}

export default CountriesList