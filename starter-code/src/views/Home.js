import React from 'react';
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import CountriesList from '../Components/CountriesList';
const Home = () => {
  return (
    <Container >  
    <Jumbotron>
      <h1>Wiki-Countries</h1>
        <CountriesList />
    </Jumbotron>
    </Container>
  );
}

export default Home;