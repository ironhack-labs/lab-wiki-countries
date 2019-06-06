import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Countries from '../countries.json'


const CountryDetail =(props)=>{



    const foundCountry = Countries[props.match.params.id]

    
    const findingTheBorder=(border)=>{
        let weFoundIt=Countries.find(elm=>elm.cca3===border)
        return Countries.indexOf(weFoundIt)
    }



    const borders = foundCountry.borders.map(border => {
        return (<li> <Link to={`/${findingTheBorder(border)}`}> {Countries[findingTheBorder(border)].name.common} </Link> </li>)
    })
    
    
    return(
        <div>
            {console.log(foundCountry)}
            <h1>{foundCountry.name.common}</h1>
            <hr/>
            <h2>Capital: {foundCountry.capital}</h2>
            <hr/>
            <p>Area: {foundCountry.area}</p>
            <hr/>
            <ul>
                {borders}
            </ul>
        </div>
    )
}





export default CountryDetail
