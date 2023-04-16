import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function MyNavBar() {
  return (
    <Navbar expand="lg" variant="light" bg="success">
      <Container>
        <Navbar.Brand href="#" color="white">
          <h1 className="text-light  ">
            {' '}
            <b>WikiCountry Lab</b>
          </h1>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default MyNavBar;
