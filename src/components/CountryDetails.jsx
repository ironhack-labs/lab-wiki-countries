import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card, ListGroup } from 'react-bootstrap';
import axios from 'axios';

export default function CountryDetails({ countries }) {
  let { alpha3Code } = useParams();

  const [selection, setSelection] = useState(null);

  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`)
      .then((res) => {
        setSelection(res.data);
      })
      .catch((error) => {
        console.log('error');
      });
  }, [alpha3Code]);

  //console.log(selection);

  if (!selection) return null;

  return (
    <Card
      className="align-items-center"
      style={{ width: '40rem', margin: '10vh' }}
    >
      <Card.Img
        className="p-3 m-3 align-items-center "
        src={`https://flagpedia.net/data/flags/icon/72x54/${selection.alpha2Code.toLowerCase()}.png`}
        alt="flag"
        style={{ width: '10rem' }}
      />
      <Card.Body>
        <Card.Title>
          <h1>{selection.name.common}</h1>
        </Card.Title>
        <Card.Text></Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          {' '}
          <h4>{selection.capital}</h4>{' '}
        </ListGroup.Item>
        <ListGroup.Item>
          <h4>
            {selection.area} km<sup>2</sup>
          </h4>
        </ListGroup.Item>

        {selection.borders.map((border) => {
          return (
            <ListGroup.Item key={border}>
              <h4>{border}</h4>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </Card>
  );
}
