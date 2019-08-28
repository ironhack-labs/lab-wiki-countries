import React from 'react';
import countries from "../countries.json";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

const CountryDetails = (props) => {
   const getCountry = id => {
     const country = oneCountry => {
       return oneCountry.cca3 === id;
     };
     return countries.find(country);
   };

   const { params } = props.match;
   const foundCountry = getCountry(params.id, 10);
  return (
    <Container>
      <Col md={{ span: 6, offset: 3 }}>
        <Card bg="primary" text="white" style={{ width: "26rem" }}>
          <Card.Body>
            <Card.Title>
              {foundCountry.flag}
              <br />
              {foundCountry.name.official}
            </Card.Title>
            <Card.Subtitle className="mb-2">
             Capital:  {foundCountry.capital[0]}
            </Card.Subtitle>
            <Card.Subtitle className="mb-2">
             Region:  {foundCountry.region}
            </Card.Subtitle>
            <Card.Subtitle className="mb-2">
              Subregion: {foundCountry.subregion}
            </Card.Subtitle>
          </Card.Body>
        </Card>
      </Col>
    </Container>
  );
}

export default CountryDetails;