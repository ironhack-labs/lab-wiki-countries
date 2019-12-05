import React, { Component } from "react";

import logo from "./logo.svg";

import styled from "styled-components";
import "./App.css";

const MainWrapper = styled.div``;
const Nav = styled.nav`
  height: 5vh;
  background-color: blue;
  color: white;
  font-weight: 400;
  align-content: center;
`;

export default class App extends Component {
  render() {
    return (
      <Nav>
        <p>WikiCountries</p>
      </Nav>
    );
  }
}
