import React, { Component, Fragment } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';

class CountryDetail extends Component {
    constructor(props) {
        super()
        this.state = {
            countries: [],
            selectedCountry: {
                name: {
                    common: "Loading..."
                },
                area: 0,
                capital: ["Loading..."],
                borders: ["Loading..."],
            },
        }
    }

    componentDidMount() {
        
        axios.get(`https://raw.githubusercontent.com/mledoze/countries/master/countries.json`)
      .then(res => {
        const countriesInfo = res.data;
        let selectedCo = countriesInfo.find(obj => {
            return obj.cca3 === this.props.match.params.countryCode
        });
        this.setState({ selectedCountry: selectedCo });
      })
    }

    render() {
        //let borderList = this.state.borders.map( (borderCode) => <li><Link to={borderCode}>{borderCode}</Link></li> )}

        return(
            <Fragment>
                <h1>{this.state.selectedCountry.name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: "30%"}}>Capital</td>
                  <td>{this.state.selectedCountry.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>{this.state.selectedCountry.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                        {this.borderList}
                      <li><Link to="/AND">Andorra</Link></li>
                      <li><Link to="/BEL">Belgium</Link></li>
                      <li><Link to="/DEU">Germany</Link></li>
                      <li><Link to="/ITA">Italy</Link></li>
                      <li><Link to="/LUX">Luxembourg</Link></li>
                      <li><Link to="/MCO">Monaco</Link></li>
                      <li><Link to="/ESP">Spain</Link></li>
                      <li><Link to="/CHE">Switzerland</Link></li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            </Fragment>
        )
    }
}

export default CountryDetail;