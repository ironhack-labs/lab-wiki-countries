import React from 'react'
import ReactDom from "react-dom";
import { Route } from "react-router-dom";
import CountriesList from "./CountriesList";
import countries from "../countries.json";
import { Link } from "react-router-dom";

const CountriesDetails = (props) => {

    let getCountry = cca3 => countries.find(obj => obj.cca3 === cca3);

    const { params } = props.match


    const foundCountry = getCountry(params.cca3);

    let getCountryBorder = border => countries.find(obj => obj.cca3 === border);


    const border = foundCountry.borders.map((eachBorder, index) => {
        return(
            <ul key={index}>
                <li> <Link to={`/${eachBorder}`}> {getCountryBorder(eachBorder).name.common} </Link> </li>
            </ul>
        )
    })

    

    return (
        <div className="detalles">
            <h1> {foundCountry.name.common} </h1>
            Capital: {foundCountry.capital}
            <p>Area: {foundCountry.area} km2</p>
            
            <p> Borders: </p>
            {border}

        </div>
    )
}

export default CountriesDetails
