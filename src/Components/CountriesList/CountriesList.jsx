import { useState } from "react"
import { Link } from "react-router-dom"
import './countriesList.css'


const CountriesList = ({ countriesList }) => {


    return (

        <div className="CountriesList">
            <hr />

            {countriesList.map((elm) => {
                return (
                    <div key={elm.name.common}>
                        <Link to={`/${elm.alpha3Code}`}>{elm.name.common}</Link>
                    </div>

                )
            })}



        </div>
    )
}

export default CountriesList

