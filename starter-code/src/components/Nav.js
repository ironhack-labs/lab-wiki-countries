import React, { Component } from 'react'
import styled from "styled-components"

const NavBar = styled.nav`
    width: 100vw;
`

export default class Nav extends Component {
    render() {
        return (
            <NavBar>
                <nav className="navbar navbar-light bg-light">
                    <span className="navbar-brand mb-0 h1">WikiCountries</span>
                </nav>
            </NavBar>
        )
    }
}
