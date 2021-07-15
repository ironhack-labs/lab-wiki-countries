import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';

function CountriesList({countries}) {
    if (countries.length === 0) {
        return <p>Loading . . .</p>
    }

    return (
        <div>
            <h1>Countries List</h1>
            {
                countries.map((country, index) => {
                    return (
                        <p key={index}>
                            <Link to={`/country/${country.alpha3Code}`}>{country.name} ({country.nativeName})</Link>
                        </p>
                    )
                })
            }
        </div>
    )
}

export default CountriesList
