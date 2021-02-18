import React, { Component } from 'react'
import axios from 'axios'

export default class CountryDetail extends Component {
   
    state = {
        infoCountry: []
      
      }
   
      getCountryInfo(code){
        axios.get(`https://restcountries.eu/rest/v2/alpha/${code}`)
        .then((data) => {
            return data
        })
      }
   
    render() {
       
       console.log("estos son props", this.props)
        console.log(this.state.infoCountry);
       
        return (
            
            <div class="col-7">

                {this.getCountryInfo(this.props.match.params.countryCode)
                }
                    <h1>{this.state.name}</h1>
                    <table class="table">
                    <thead></thead>
                    <tbody>
                    <tr>
                    <td style={{width: "30%"}}>Capital</td>
                    <td></td>
                    </tr>
                    <tr>
                    <td>Area</td>
                    <td>
                        <sup>2</sup>
                    </td>
                    </tr>
                    <tr>
                    <td>Borders</td>
                    <td>
                        <ul>
                             {
                                this.state.infoCountry[0].borders.map(
                                    (border)=>{
                                        return (
                                            <li><a href={`/${border}`}>Andorra</a></li>
                                        )
                                    }
                                )}
                            

                             
                        <li><a href="/AND">Andorra</a></li>
                        <li><a href="/BEL">Belgium</a></li>
                        <li><a href="/DEU">Germany</a></li>
                        <li><a href="/ITA">Italy</a></li>
                        <li><a href="/LUX">Luxembourg</a></li>
                        <li><a href="/MCO">Monaco</a></li>
                        <li><a href="/ESP">Spain</a></li>
                        <li><a href="/CHE">Switzerland</a></li>
                        </ul>
                    </td>
                    </tr>
                </tbody>
                </table>
            </div>
        
        )
    }
}
