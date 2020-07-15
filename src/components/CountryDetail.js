import React from 'react'



const CountryDetail = ({ name, capital }) => {
    return (
        <article>
            <h2>{name}</h2>
            <p>Capital: {capital} </p>
        </article>
    )
}

export default CountryDetail;