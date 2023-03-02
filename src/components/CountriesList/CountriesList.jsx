import { useState, useEffect } from "react";
import countries from './../../countries.json'
import { Link } from "react-router-dom";

const CountriesList = () => {



    return <>{countries.map((elm) => {
        return (<>
            <Link to={elm.alpha3Code}><p to="/:id" key={elm.id}>{elm.name.common}</p></Link>
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${elm.alpha2Code.toLowerCase()}.png`}>
            </img></>
        )
    })}</>

}

export default CountriesList