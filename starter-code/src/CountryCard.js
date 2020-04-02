import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class CountryCard extends Component {
    render() {
        return (
            <div className='card'>
                <Link className='link' to = {`/${this.props.cca3}`}>{this.props.country}</Link>
            </div>
        )
    }
}
