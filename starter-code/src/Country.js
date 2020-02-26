import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class Country extends Component {
    render() {
        return(
            <div className="container">
                <Link to={this.props.id}>{this.props.flag} {this.props.name}</Link> 
            </div>
        )
    }
}


