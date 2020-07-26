import React, { Component } from 'react'
import axios from 'axios'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class CountryDetails extends Component {
   constructor(props) {
       super(props)
       this.state = {
           countryDetails: null,
           country: this.props.location.state
       }
      this.generateInfo = this.generateInfo.bind(this)
   }

   async fetchData() {
    try {
        const { data } = await axios.get(`https://restcountries.eu/rest/v2/alpha/${this.props.location.state}`)
        this.setState({
            countryDetails: {...data}
        })
        console.log(this.state.countryDetails)
    } catch (error) {
        console.log(error.response)
    }
   }

  
   async componentDidMount() {
    this.fetchData()
    }

    async componentDidUpdate(){
        if(this.state.countryDetails.alpha3Code !== this.props.location.state) {
            this.fetchData()
        } else {
            return
        }  
    }

    generateInfo(){
        return (
            <table>
                <thead>
                    <tr>
                    <th><h1>{this.state.countryDetails.name}</h1></th>
                    </tr> 
                </thead>
                <tbody>
                    <tr>
                        <td>Capital: </td>
                        <td>{this.state.countryDetails.capital}</td>
                    </tr>
                    <tr>
                        <td>Area: </td>
                        <td>{this.state.countryDetails.area} km²</td>
                    </tr>
                    <tr>
                        <td>Borders: </td>
                        <td>
                            <ul>
                                {this.state.countryDetails.borders.map(country => (<Link to={{
                                    pathname: `/${country}`,
                                    state: country,
                                    }} key={country}><li>{country}</li>
                                    </Link>))}
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        )
    }

    render() {
        let countryDetails = ''
        if (this.state.countryDetails !== null) {
            countryDetails = this.generateInfo()
        }
        return (
            <Col>
                {this.props.children}
               {countryDetails}
            </Col>
        )
    }
}

export default CountryDetails

 
