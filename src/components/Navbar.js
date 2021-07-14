import { Navbar, Container } from "react-bootstrap"
import { NavLink } from 'react-router-dom'

import './Navbar.css'

const MyNavbar = () => {

    return (

        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink exact to='/'>Home</NavLink>
                <NavLink to='/country'>Countries</NavLink>
            </Container>
        </Navbar>

    )
}

export default MyNavbar