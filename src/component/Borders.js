import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Borders extends Component {
    render() {
        return (
            <li>
                {<Link to={`/countrydetails/${this.props.countryCode}`}
                className="list-group-item list-group-item-action" aria-current="true">
                    {this.props.name} 
                </Link>}
            </li>
        )
    }
};

export default Borders;