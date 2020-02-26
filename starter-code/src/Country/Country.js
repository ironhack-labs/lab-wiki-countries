import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Country.css"
import { Switch, Route } from 'react-router-dom';


class Country extends Component {
    render() {
        return (
        <div>
            <Link className="list-group-item list-group-item-action" to={this.props.cca3}>{this.props.flag} {this.props.name}</Link>
        </div>
        
    )
    }
}
export default Country;