import React, { Component } from 'react'
import { Link } from "react-router-dom"

const CountryDetails = ({ name, capital, area, borders }) => {
    return (
        <>
            <h3>{name}</h3>
            
            <table>
             <tr>
               <td>Capital: {capital}</td>
             </tr>
             <tr>
              <td>Area: {area}km</td>
                </tr>
             <tr>
              <td>Borders: {borders}</td>
             </tr>    
            </table>
            </>
    )
}


export default CountryDetails