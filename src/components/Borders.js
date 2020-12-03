import React from 'react'
import data from '../countries.json'

export default function Borders(props) {
    console.log(props.borders);

    // data.map(country => {
    //     return (
    //          <div key={country.cca3} className="list-group-item list-group-item-action"> 
    //         <h3>
    //             <Link to={`/countries/${country.cca3}`}>{country.flag}{country.name.common}</Link>
    //         </h3>
    //         </div>
    //     )
    // })}

    

    return (
        <>
        {props.borders.map(border => {
            return (
                <li><a href={border}>{border}</a></li>
            )
        })}
        </>
        
    )
}
