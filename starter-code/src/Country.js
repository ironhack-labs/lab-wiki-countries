import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Country extends Component {
    render() {
        return (
            <Link to={"/" + this.props.ind} className="list-group-item list-group-item-action">{this.props.flag} {this.props.name}</Link>
        )
    }
}
