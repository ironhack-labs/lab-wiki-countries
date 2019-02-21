import React, { Component } from 'react'
import Countries from '../countries.json'
import { Link } from 'react-router-dom';

export default class DetailCountry extends Component {

  render() {
    let selectedCountry = Countries.find(country=>{
      return country.cca3 === this.props.match.params.cca3
    })
    return (
      <div className="col-7" >
          <h1>{selectedCountry.name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td>Capital</td>
                  <td>{selectedCountry.capital[0]}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>{selectedCountry.area}
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                    {
                     
                   selectedCountry.borders.map((border,idx)=>{
                    
                      let tobias = Countries.find(country=>{
                       return country.cca3 === border
                      })
                      return <li>
                        <Link key={idx} to={tobias.cca3}>{tobias.name.common}</Link>
                        </li>
                      


                     })
                      
                    
                     }
                     
                     
                     
                    
                    
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            
          </div>
    )
  }
}
