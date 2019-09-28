import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
class CountryList extends Component {

    render() {


        return (


            <NavLink style={{
                width: "400px"
            }} to={`/country/${this.props.cca3}`} className="list-group-item list-group-item-action">  {this.props.name.common} </NavLink>


        );
    }
}

export default CountryList;