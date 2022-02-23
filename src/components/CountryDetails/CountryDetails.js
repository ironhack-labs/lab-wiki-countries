import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"



function CountryDetails({ countries }) {

    const { countryId } = useParams()

    let sameCountry = countries.filter(country => countryId === country.alpha3Code)
    console.log(sameCountry)

    const borders = sameCountry[0].borders
    console.log(borders)

    return (
        <div>
            <h1> Country Details </h1>

            {sameCountry[0].name.official}
            <hr></hr>
            {sameCountry[0].capital}
            <hr></hr>
            {borders.map(borders => {
                return (
                    <div key={borders}>
                        {borders}
                    </div>
                )
            })}

        </div>

    )
}


export default CountryDetails