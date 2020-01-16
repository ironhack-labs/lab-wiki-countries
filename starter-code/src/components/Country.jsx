import React , { Component } from 'react';

import { Link } from 'react-router-dom';

export default class Country extends Component{
    render(){
    return (
        <Link className="list-group-item list-group-item-action" to={"/country/"+this.props.cca3}>{this.props.flag} {this.props.name}</Link>
    )
    }
}
