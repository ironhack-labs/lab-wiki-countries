import './Navbar.css'

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const NavbarComponent = () => {

    return (
        <Navbar bg="primary" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand>Wiki Countries</Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default NavbarComponent