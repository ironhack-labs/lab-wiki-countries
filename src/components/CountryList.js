import React, { Component } from 'react'
import { ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class CountryList extends Component {
    render() {
        return (
            <div>
                <ListGroup>
                    {
                        this.props.countries.map((elem) => {
                            return <ListGroup.Item key={elem.cca3}>
                                <Link to={`/${elem.cca3}`}>{elem.name}</Link>
                            </ListGroup.Item>
                        })
                    }
                </ListGroup>
            </div>
        )
    }
}
