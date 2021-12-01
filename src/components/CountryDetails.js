import React, { Component } from 'react'
import { Link } from 'react-router-dom';


class CountryDetails extends Component {

    constructor() {
        super();
        this.state = {
           country: undefined
        }
    }
    componentDidMount = () => this.setState({country: this.props.countries.find(country => country.cca3 === this.props.match.params.cca3)})

    render() {
        
    return (
     this.state.country ? <div class="col-7">
        <h1>{this.state.country.name.common}</h1>
         <table class="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td>Capital</td>
                  <td>{this.state.country.capital[0]}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {this.state.country.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                    {this.state.country.borders.map((country) => {
                        return <Link key={country.cca3} to={`/country/${country.cca3}`}><li>{this.state.country.name.common}</li></Link>
                        })}
                    </ul>
                  </td>
                </tr>
              </tbody>
        </table>
     </div>
    :
    <div>Loading</div>
    )
}
}
export default CountryDetails;