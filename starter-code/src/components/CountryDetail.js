import React from 'react';
// import '../App.css';
import countries from '../countries.json';

function CountryDetail(props) {
  let theCountry = countries.find(
    (country) => country.cca3 === props.match.params.cc3a);
     return (
       <div className="col-7">
         <h1>{theCountry.name.common}</h1>
         <table className="table">
           <tbody>
             <tr>
               <td className="capital">Capital</td>
               <td>{theCountry.capital}</td>
             </tr>
             <tr>
               <td>Area</td>
               <td>
                 {theCountry.area} km
                 <sup>2</sup>
               </td>
             </tr>
             <tr>
               <td>Borders</td>
             </tr>
           </tbody>
         </table>
       </div>
     );
}; 

export default CountryDetail;
