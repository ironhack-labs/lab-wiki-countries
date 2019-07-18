import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ListCountries extends Component {
    render() {
        return (
            
              <Link  to={"/"+ this.props.idx} className="list-group-item list-group-item-action">{this.props.flag} {this.props.name}></Link>
            
        )
    }
}
