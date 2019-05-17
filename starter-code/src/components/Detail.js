import React from "react";
import countries from "../countries.json";


let Detail =(props) =>{
    const link = props.match.params.id;
    const Country = countries.find(country => country.cca3 === link);   
    const {name,capital,area,borders }= Country
    let {common} = name
    let Capital = capital[0]
    return(
       <div className='col-7'>
       <h1>{common}</h1>
       <table className='table'>
       <thead></thead>
       <tbody>
           <tr>
               <td style={{width:'30%'}}>Capital</td>
               <td>{Capital}</td>
           </tr>
           <tr>
               <td>Area</td>
               <td> {area} km
                   <sup>2</sup>
               </td>
           </tr>
           <tr>
               <td>Borders:</td>
               <td>
                   <ul className='text-left'>
                   {borders.map((i,index) => <li key = {index}>
                   <a href={i}> {countries.find(country => country.cca3 === i).name.common} </a>
                    </li> )}
                   </ul>
               </td>
           </tr>
       </tbody>
       </table>
       </div> 
    )
}

export default Detail;