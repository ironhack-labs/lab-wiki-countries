import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function MyNavBar() {
  return (
    <Navbar expand="lg" variant="light" bg="success">
      <Container>
        <Navbar.Brand href="#" color="white">
          <h3 className="text-light ">WikiCountry Lab</h3>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default MyNavBar;
