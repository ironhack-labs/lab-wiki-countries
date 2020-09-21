import React from 'react'
import styled from 'styled-components'

const NavbarStyle = styled.nav`
background-color: blue;
color: white;
position: fixed;
width: 100vw;
`

function Navbar() {
    return (
        <NavbarStyle>
            <h1>LAB | Wiki Countries</h1>
        </NavbarStyle>
    )
}

export default Navbar
