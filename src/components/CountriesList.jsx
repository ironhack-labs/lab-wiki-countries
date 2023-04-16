import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  Container,
  ListGroup,
  ListGroupItem,
  Image,
  Col,
} from 'react-bootstrap';

const CountriesList = ({ countries }) => {
  const [search, setSearch] = useState('');

  const sortedCountries = [...countries].sort((a, b) =>
    a.name.official.localeCompare(b.name.official)
  );

  function changeBackground(e) {
    e.target.style.background = '#B2D2A4';
  }
  function changeBackgroundBack(e) {
    e.target.style.background = '';
  }

  return (
    <Container className=" m-4">
      <ListGroup as={'ul'}>
        {sortedCountries.map((country) => {
          return (
            <ListGroupItem
              className="justify-content-center "
              key={country.alpha3Code}
              onMouseOver={changeBackground}
              onMouseLeave={changeBackgroundBack}
            >
              <Image
                className="p-3 m-3 d-flex-center"
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                alt="flag"
                onMouseOver={changeBackground}
                onMouseLeave={changeBackgroundBack}
              />
              <Link
                to={`/${country.alpha3Code}`}
                onMouseOver={changeBackground}
                onMouseLeave={changeBackgroundBack}
              >
                <h6>{country.name.official}</h6>
              </Link>
            </ListGroupItem>
          );
        })}
      </ListGroup>
    </Container>
  );
};

export default CountriesList;
