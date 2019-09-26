import React, { Component } from "react";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar expand="lg" variant="info" bg="info">
          <Container>
            <Navbar.Brand>Wiki Countries</Navbar.Brand>
          </Container>
        </Navbar>
      </div>
    );
  }
}
