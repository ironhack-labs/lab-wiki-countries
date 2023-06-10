import Container from 'react-bootstrap/Container';
import '../App.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
  return (
    <Navbar bg="primary" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <div className='nav-title'> WikiCountries</div>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
