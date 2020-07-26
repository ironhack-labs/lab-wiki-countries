import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class CountryDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            country: {
                name: '',
                capital: '',
                area: 0,
                borders:[]
            },
            code: this.props.match.params.id
        }
    }

    componentDidMount() {
            axios.get(`https://restcountries.eu/rest/v2/alpha/${this.props.match.params.id}`)
            .then(({data}) => this.setState({
                ...this.state,
                country: {
                    name: data.name,
                    capital: data.capital,
                    area: data.area,
                    borders: data.borders
                }
            }))
    }

    componentDidUpdate() {
        const isUpdate = this.state.code !== this.props.match.params.id
        if (isUpdate) {
            axios.get(`https://restcountries.eu/rest/v2/alpha/${this.props.match.params.id}`)
            .then(({data}) => this.setState({
                country: {
                    name: data.name,
                    capital: data.capital,
                    area: data.area,
                    borders: data.borders
                },
                code: this.props.match.params.id
            }))
        }
    }

    render() {

        const {name, capital, area, borders} = this.state.country

        const renderDetails = (
            <div key={this.state.code}>
                <h2>{name}</h2>
                <p><strong>Capital</strong> {capital}</p>
                <p><strong>Area</strong> {area}</p>
                <div>
                    <p>Borders</p>
                    <ul className="list-group">
                        {borders.map(
                            border => 
                                <Link 
                                    to={`/details/${border}`}
                                    key={border}
                                >
                                {border}
                                </Link>
                        )}
                    </ul>
                </div>
            </div>
        )
        console.log(this.state.country)
        console.log(this.state.code)
        return (
            <div className="col text-center" key={this.state.code} >
                <h1>Country Details</h1>
                {renderDetails}
            </div>
        )
    }
}
