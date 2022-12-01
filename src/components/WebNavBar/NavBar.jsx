import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";

const NavbarComponent = () => {

    return (
        <Navbar bg="light">
            <Container>
                <Navbar.Brand href="/">LAB - WikiCountries.</Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default NavbarComponent