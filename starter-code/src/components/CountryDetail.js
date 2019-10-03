import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class CountryDetail extends Component {

    
    
    bordersList = () => {

    
        let country;
        let List = this.props.countryInfo.borders.map((eachBorder, i) => {
            
            country = this.props.findBorderCountry(eachBorder);
            return <li key={i}><Link to={'/' + country.cca3}>{country.name.official}</Link></li>
        })
        return List
    }




    render () {
        console.log(this.props.countryInfo);
        return (
            <div className="col-7">
                <h1>{this.props.countryInfo.name.official}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td>Capital</td>
                  <td>{this.props.countryInfo.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>{this.props.countryInfo.area}
                    km<sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                        {this.bordersList()}
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