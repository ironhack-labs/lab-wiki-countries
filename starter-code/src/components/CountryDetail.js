import React, { Component } from 'react'
import countries from '../countries.json'
import queryString from 'query-string'
import { Link } from 'react-router-dom';

export default class CountryDetail extends Component {
    state = {
        countryCode: this.props.match.params.countryId,
    }
    findCountry = (countryCode) => {
        const result = countries.find(country => country.cca3 === countryCode);

        return result;
    }
    render() {
        const foundProject = this.findCountry(this.state.countryCode);
        console.log(foundProject);
        return (
            <div className='col-7'>
                <h1>{foundProject.name.common}</h1>
                <hr></hr>
                <p>Capital {foundProject.capital[0]}</p>
                <hr></hr>
                <p>Area {foundProject.area}km²</p>
                <hr></hr>
                <ul>
                {
                    foundProject.borders.map((countrycode) => {
                        const result = countries.find(country => country.cca3 === countrycode);
                        return (
                            <li><a href = {`/${result.cca3}`}>{result.name.common}</a></li>
                        )
                    })
                }
                </ul>
            </div>
        )
    }
}
{/* <li><Link to ={`/${result.cca3}`}>{result.name.common}</Link></li> */}