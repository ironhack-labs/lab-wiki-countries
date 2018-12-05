import React, { Component } from 'react';
import './CountryDetail.css';
import { Link, Switch, Route } from "react-router-dom";


export default class CountryDetail extends Component {


  render() {
    // console.log(this.props.match.params.cca3);
    console.log(this.props.country[0]);
    let countrySelected = this.props.country[0];
    console.log(countrySelected.borders)
    let borders =countrySelected.borders.map((border)=>{
       return this.props.findCountry(border)[0];
    })

    return (

      <div className="CountryDetail">
         <h1>{countrySelected.name.common}</h1>
         <table className="table">
           <thead></thead>
           <tbody>
             <tr>
               <td>Capital</td>
               <td>{countrySelected.capital}</td>
             </tr>
             <tr>
               <td>Area</td>
               <td>{countrySelected.area} km
                 <sup>2</sup>
               </td>
             </tr>
             <tr>
               <td>Borders</td>
               <td>
                 <ul>
                    {borders.map(border => <li><Link  to={`/${border.cca3}`}>{border.name.common}</Link></li>)}
                 </ul>
               </td>
             </tr>
           </tbody>
         </table>
      </div>
    );
  }
}

