import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Nav = () => {
  return (
    <div>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand>LAB - WikiCountries.</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default Nav;