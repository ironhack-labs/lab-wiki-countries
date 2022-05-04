import { useParams } from "react-router-dom"
// import { useState } from 'react'

function CountryDetails({ countries }) {
    const { id } = useParams()

    const result = countries.find(obj => {
        if (obj.alpha3Code === id) {
            return obj
        }
    })

    return (
        <div>
            <h1>Detalles país</h1>
            <p>{result.name.common}</p>

        </div>
    );
}

export default CountryDetails