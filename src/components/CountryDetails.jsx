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
            code: ''
        }
    }

    getData() {
        axios.get(`https://restcountries.eu/rest/v2/alpha/${this.props.match.params.id}`)
            .then(({data}) => this.setState({
                ...this.state,
                country: {
                    name: data.name,
                    capital: data.capital,
                    area: data.area,
                    borders: data.borders
                },
                code: this.props.match.params.id
            }))
    }

    componentDidMount() {
        this.getData()
    }
            

    componentDidUpdate() {
        const isUpdate = this.state.code !== this.props.match.params.id
        if (isUpdate) {
            this.getData()
        }
    }

    render() {

        const {name, capital, area, borders} = this.state.country

        const links = borders.map(border => (
            <li key={border} className="list-group-item">
                <Link to={`/details/${border}`}
                >
                {border}
                </Link>
            </li>
            ))

        const renderDetails = (
            <div key={this.state.code}>
                <h2>{name}</h2>
                <p><strong>Capital</strong> {capital}</p>
                <p><strong>Area</strong> {area}</p>
                <div>
                    <p><strong>Borders</strong></p>
                    <ul className="list-group">
                        {links}
                    </ul>
                </div>
            </div>
        )

        return (
            <div className="col text-center" key={this.state.code} >
                <h1>Country Details</h1>
                {renderDetails}
            </div>
        )
    }
}
