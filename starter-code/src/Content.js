import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import countries from './countries.json'

export default class Content extends Component {
  
        eachCountries =() =>{
          let content = this.props.stateProp.place.map((eachCountry, i)=>{
              return(
               
                      <div key={i} className="col-5">
                        <div className="list-group">
                          <Link className="list-group-item list-group-item-action" to={eachCountry.cca3}>{eachCountry.name.common}</Link>
                        </div>
                      </div>
                      
              
          )}
          )
          return content
        }

   borderCountries = () =>{
     let content = this.props.stateProp.place.map((eachCountry, i)=>{
       return(
        
        <li key={i}><a href='/'>{eachCountry.name.common}</a></li>
      
       )
     })
     return content
   }
        
    render() {
        console.log(this.props.stateProp.place[0].name)
        return (
            <div>
          <div id="root">
          <div>
            <nav className="navbar navbar-dark bg-primary mb-3">
              <div className="container">
                <a className="navbar-brand" href="/">WikiCountries</a>
              </div>
            </nav>
            <div className="col-5">
              {this.eachCountries()}
            </div>
            <div className="container">
              <div className="row">
                <div className="col-7">
                  <h1>{this.props.stateProp.place.name}</h1>
                  <table className="table">
                    <thead></thead>
                    <tbody>
                      <tr>
                        <td>Capital</td>
                        <td>{this.props.stateProp.place.capital}</td>
                      </tr>
                      <tr>
                        <td>Area</td>
                        <td>{this.props.stateProp.place.area} km
                          <sup>2</sup>
                        </td>
                      </tr>
                      <tr>
                        <td>Borders</td>
                        <td>
                        <ul>
                          {this.borderCountries()}
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
            </div>
        )
    }
}
