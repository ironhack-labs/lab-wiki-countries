import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Borders.css"


class Borders extends Component {
    render() {
        return (
        <div>
            <li>
            <Link to={this.props.border}>{this.props.border}</Link>
            </li>
        </div>
        
    )
    }
}
export default Borders;