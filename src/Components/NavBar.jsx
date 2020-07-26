import React from 'react'
import {Navbar} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const CustomNavbar = props => {
    return (

        <Navbar className="w100" bg="primary" variant="dark" expand="lg">
            <Link to="/" className="white">
            <Navbar.Brand>Wiki Countries</Navbar.Brand>
            </Link>
        </Navbar>

    )
}


export default CustomNavbar
