import React, { Component } from 'react'
import countries from '../countries.json'

class CountryDetails extends Component {

    // constructor () {
    //     super()
    //     this.state = {

    //         countries: countries,


    //     }
    // }

    // componentDidUpdate() {
    //     console.log('Estas son las props de react-router-dom, pasadas desde el componente App:', this.props)
    //     const {country, capital, area, borders, } = this.props.match.params
    //     // const oneCountry = this.state.countries.filter(elem => elem.name.common === this.props.match.params)
    //     // this.setState({
    //     //     countries : countries.filter(elem => elem.name.common === this.props.match.params.country)
    //     // })

    // }
  
    

    render() {

        console.log('Estas son las props de react-router-dom, pasadas desde el componente App:', this.props)

        // const {country, capital, area } = this.props.match.params
        
       
        

        return (
            <>
            <h1>caca</h1>
                {/* <div className="col-7">
          <h1>{country}</h1>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td >Capital</td>
                <td>{capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>{area} km
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
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
        </div> */}
                
            </>
        )
    }
}

export default CountryDetails