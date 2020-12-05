import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react'
import { Route, Link, Switch } from "react-router-dom";

export default class CountryDetails extends Component {

 

    
    render() {
        console.log("props",this.props)
        console.log("Countries", this.props.match.params.cca3)
        console.log("Countries2", this.props.Countries)
       
        if (!this.props.isLoading) {
             console.log("still loading");
             return (<div>Loading</div>)
        }

   
        const filteredCountry = this.props.Countries.filter(val => val.cca3 === this.props.match.params.cca3)
        
        console.log("Filtered Country",filteredCountry)
        return (
           
            <div className="col-7">
                <h1>{filteredCountry[0].name.common}</h1>
                <table class="table">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td styles={"width: 30%;"}>Capital</td>
                            <td>{filteredCountry[0].capital}</td>
                        </tr>
                        <tr>
                            <td>Area</td>
                            <td>{filteredCountry[0].area} km
                  <sup>2</sup>
                            </td>
                        </tr>
                        <tr>
                            <td>Borders</td>
                            <td>
                                {filteredCountry[0].borders.map((el) =>
                                    (<ul><Link key={el} to={`/${el}`}>{ this.props.Countries.filter(val => val.cca3 === el)[0].name.common}</Link></ul>)) }
                                
                                
                                
                                   
                                   
                               
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
      
   
 
        )
    }
}
