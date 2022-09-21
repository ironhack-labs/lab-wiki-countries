import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const NavBar = () => {
    return (


        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Wiki Countries</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;