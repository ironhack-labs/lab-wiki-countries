import React, { Component } from 'react'
import countries from './countries.json'
import { Link } from 'react-router-dom'

export default class Details extends Component {

    findCountry = (id) =>{
        return countries.find((theCountry)=>{
            return theCountry.cca3 === id || theCountry.flag === id
        })
    }

    getBorders = (borders) =>{
        return borders.map((eachBorder, i)=>{
            let country = this.findCountry(eachBorder, i);
            return (
            <li key={i}>
                <Link to={`/country-detail/${eachBorder}`}>
                    {country.flag}{country.name.common}
                </Link>
            </li>
            )
        })
    }

    render() {
        let id = this.props.match.params.id
        let nation = this.findCountry(id)
     

        return (
            <div className="col-7">
            <h1>{nation.name.official} {nation.flag}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: "30%"}}>Capital</td>
                  <td>{nation.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>551695 km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      {this.getBorders(nation.borders)}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )
    }
}
