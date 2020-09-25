import { Link } from "react-router-dom";
import countries from '../countries.json';
import React from 'react'

export default function CountryDetails(props) {
console.log('this is countryDetails', props)
    const clickedCountryId = props.match.params.id;
    console.log('this is clickedCountryId', clickedCountryId)
    const country = countries.find(country => country.cca3 === clickedCountryId)
    console.log('this is country', country)
    return (
     
  <div className="col-7" key={country.cca3}>
             <h1>{country.flag} {country.name.official}</h1>
             <table className="table">
               <thead></thead>
               <tbody>
                 <tr>
                   <td style={{width:"30%"}}>Capital</td>
                   <td>{country.capital}</td></tr>
                 <tr>
                   <td>Area</td>
                   <td>{country.area}
                     <sup>2</sup>
                   </td>
                 </tr>
                 <tr>
                   <td>Borders</td>
                   <td>
                     <ul>
                     {country.borders.map(boardercountry => {
                                let boardercountryName =  countries.find(country => country.cca3 === boardercountry).name.official
                                return (<li key={boardercountry}><Link  to={`/${boardercountry}`}>{boardercountryName}</Link></li>)
                            }
                            )
                            }
                     </ul>
                   </td>
                 </tr>
               </tbody>
             </table>
           </div> 
    )
}

