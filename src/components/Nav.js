import React, { Component } from 'react'
import { Navbar } from "react-bootstrap"

export default class Nav extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand>LAB - WikiCountries</Navbar.Brand>
                </Navbar>
            </div>
        )
    }
}
