import React, { Component } from 'react'
import { ListGroup } from "react-bootstrap"
import { Link } from 'react-router-dom';

export default class CountryDetails extends Component {

    state = {
        country: {},
        borders: []
    }

    getData = () => {
        let { countries } = this.props;

        let country = countries.filter((elem) => {
            return elem.cca3 === this.props.match.params.id;
        })
        let neighbours = countries.filter((elem) => {
            return country[0].borders.includes(elem.cca3);
        })

        this.setState({
            country: country[0],
            borders: neighbours
        })


    }

    componentDidMount() {
        this.getData()
    }

    componentDidUpdate() {
        if (this.props.match.params.id !== this.state.country.cca3) this.getData()
    }

    render() {
        const { country, borders } = this.state;

        return (
            <div>
                <ListGroup variant="flush">
                    <ListGroup.Item><h1>{country.name} {country.flag}</h1></ListGroup.Item>
                    <ListGroup.Item><b>Capital: </b> {country.capital}</ListGroup.Item>
                    <ListGroup.Item><b>Area: </b> {country.area} km<sup>2</sup></ListGroup.Item>
                    <ListGroup.Item>
                        <b>Borders:</b>
                        <dl>
                            {
                                borders.map((elem) => {
                                    return <li key={"border" + elem.cca3}>
                                        <Link to={`/${elem.cca3}`}>{elem.name}</Link>
                                    </li>
                                })
                            }
                        </dl>
                    </ListGroup.Item>
                </ListGroup>
            </div>
        )
    }
}
