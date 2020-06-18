import React from 'react';
import {Link} from 'react-router-dom'
import countries from '../countries.json'
import Countrydetail from './CountryDetail'

export default class CountriesList extends React.Component {
    state = {
        list: countries
    }

    render() {
    return (

    <div id="root">
    <div>
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <Link className="navbar-brand" to="/">WikiCountries</Link>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-5" style={{maxHeight: '90vh', overflow: "scroll"}}>
            <div className="list-group">
            {
                    this.state.list.map((country, i) => {
                        return (
                            <p key={i}>
                                <Link className="list-group-item list-group-item-action" to={`/${country.cca3}`}>{country.flag} {country.name.common}</Link>
                            </p>
                        )
                    })
                }
            </div>
           </div>
           <div className="col-7">
             <h1>{this.props.name}</h1>
             <table className="table">
               <thead></thead>
               <tbody>
                 <tr>
                   <td style={{width: "30%"}}>Capital</td>
                   <td>{this.props.capital}</td>
                 </tr>
                 <tr>
                   <td>Area</td>
                   <td>{this.props.area}
                     <sup>2</sup>
                   </td>
                 </tr>
                 <tr>
                   <td>Borders</td>
                   <td>
                     <ul>
                     {
                    this.props.borders.map((country, i) => {
                        return (
                            <p key={i}>
                                <li><Link to={`/${country}`}>{country}</Link></li>
                            </p>
                        )
                    })
                }
                     </ul>
                   </td>
                 </tr>
               </tbody>
             </table>
           </div>
         </div>
       </div>
     </div>
   </div>

  );
    }
}