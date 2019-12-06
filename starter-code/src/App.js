import React, { Component } from "react";
import styled from "styled-components";
import "./App.css";

const Nav = styled.nav`
  height: 12vh;
  background-color: #232323;
  color: white;
  font-weight: 400;
  align-content: center;
  text-aling:center;
  padding: 14px 15px;
  font-size:25px

`;

export default class App extends Component {
  render() {
    return (
      <Nav id="navnav">
      <p>Wiki Countries</p>
    </Nav>
  );
}
} 