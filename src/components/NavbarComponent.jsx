import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";

function NavbarComponent() {
  return (
    <Navbar bg="navbar navbar-dark bg-primary">
      <Container>
        <NavLink className="brand" to={"/"}><h1>WikiCountries</h1></NavLink>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;