import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import countriesJson from '../countries.json';

class CountryDetails extends Component {

    state = {
        countryDetail: null
    }

    getData = async () => {
        let countries = countriesJson
        let countriesFiltered = countries.filter((country) => {
            return country.cca3 == this.props.match.params.countryCCA3
        })

        let countryDetail = countriesFiltered[0]

        let borders = []
        countryDetail.borders.map((cca3) => {
            let countriesFilteredBorder = countries.find((country) => country.cca3 == cca3);
            borders.push(countriesFilteredBorder)
        })

        let country = {
            id: this.props.match.params.countryCCA3,
            name: countryDetail.name.common,
            capital: countryDetail.capital,
            area: countryDetail.area,
            borders: borders
        }

        this.setState({
            countryDetail: country
        })
    }

    componentDidMount(){
        console.log("CountryDetails MOUNTED")
        this.getData()
    }

    componentDidUpdate() {
        console.log("CountryDetails UPDATED")
        let newId = this.props.match.params.countryCCA3

        let stateId = this.state.countryDetail.id 

        if(newId !== stateId) {
            this.getData()
        }
    }


    render() {
        console.log('CountryDetails props', this.props)
        console.log('CountryDetails RENDERED')
        if (!this.state.countryDetail) {
            return <p>Loading Details. . . </p>
        }
        const {countryDetail} = this.state

        return (
            <div>
                <h1>{countryDetail.name}</h1>
                <table className="table">
                    <tbody>
                        <tr>
                            <td>Capital:</td>
                            <td>{countryDetail.capital[0]}</td>
                        </tr>
                        <tr>
                            <td>Area:</td>
                            <td>{countryDetail.area}</td>
                        </tr>
                        <tr>
                            <td>Borders:</td>
                            <td>
                           { 
                                countryDetail.borders.map((border) => {
                                    return <ul>
                                        <li>
                                            <Link to={`/country/${border.cca3}`} style={{ textDecoration: 'inherit'}}>
                                                {border.name.common}
                                            </Link>
                                        </li>
                                    </ul>
                                }) 
                            }                      
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default CountryDetails;
