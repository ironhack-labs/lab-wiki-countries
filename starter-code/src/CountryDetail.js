import React, { Component } from 'react'
import './App.css';
import {Link} from 'react-router-dom'

export class CountryDetail extends Component {
   
  
    render() {

        let country =  this.props.countries.find(eachCountry =>{
            return this.props.match.params.id === eachCountry.cca3
                })

                // showBorders = () =>{
                //     return country.borders.map((eachCountry,i)=>{
                //         return(
                //           <li><a>{eachCountry}</a></li>
                //         )
                //     })
                //   }  
      

        return (
        
            <div className="col-7">
            <h1>{country.name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: "30%"}}>Capital</td>
                  <td>{country.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>{country.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                    {country.borders.map(eachBorder => {
                        return <li><Link to={`${eachBorder}`}>{eachBorder}</Link></li>
                    })}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
                    )
                }
            }

export default CountryDetail
