import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

function Nav() {
  return (
    <Navbar expand="lg" variant="light" bg="primary">
      <Container>
        <Navbar.Brand href="/">wikiCountries</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Nav;
