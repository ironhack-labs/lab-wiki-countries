
import React, { Component } from 'react'

import Countries from '../../countries.json'

import {Link} from 'react-router-dom'





class Details extends Component {



    search = (cca3) => {

        const countries = Countries.filter(elm => elm.cca3 === cca3)
        return countries[0]
    }
    

    render() {


        const {cca3} = this.props.match.params
        const country = this.search(cca3)
        return (
            <div className="col-7" key={cca3}>
            <h1>{country.name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td styleName="width: 30%;">Capital</td>
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
                    {country.borders.map(elm => <Link to={`/${elm}`} key={elm}> <li>{elm}</li> </Link> )}
                      
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
    
        )   
    }
}

export default Details