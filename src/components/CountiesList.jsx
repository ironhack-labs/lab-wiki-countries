import ListGroup from 'react-bootstrap/ListGroup';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CountryList({ allCountries }) {
  return (
    <Container>
      <ListGroup as="ul">
        <ListGroup.Item as="li" disabled>
          <Link />
        </ListGroup.Item>
        <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item as="li" disabled>
          Morbi leo risus
        </ListGroup.Item>
        <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
      </ListGroup>
    </Container>
  );
}

export default CountryList;
