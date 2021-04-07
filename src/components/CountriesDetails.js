import React, { Component } from 'react'
import countries from '../countries.json'
import { Link } from 'react-router-dom'


class CountriesDetails extends Component {

    //función que recibe un códio y retorne un nombre de un país

    getName = (code) => {


        const countryCode = countries.find((country) => {
            return country.cca3 === code
        })


        return countryCode.name.common
     }

    render() {

        const findedCountry = countries.find((country) =>{
            return country.cca3 === this.props.match.params.codigo
        });


        return (
            <div className="col-7">
            <h1>{findedCountry.name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: "30%"}}>Capital</td>
                  <td>{findedCountry.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                  {findedCountry.area} Km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <ul>
                        {findedCountry.borders.map((border) => { return <li><Link to = {`/countrydetail/${border}`}>{this.getName(border)}</Link></li>})}

                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )
    }
}

export default CountriesDetails