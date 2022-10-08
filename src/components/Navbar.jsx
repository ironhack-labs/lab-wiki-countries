import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import logo from "../logo.svg"

function BasicExample() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={logo}
                        width="35"
                        height="35"
                        className="d-inline-block align-top"
                    />{' '}
                    React Bootstrap
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default BasicExample;