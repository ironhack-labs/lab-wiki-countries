import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <NavLink exact to="/"><h1>WikiCountries</h1></NavLink>
            </div>
        )
    }
}
