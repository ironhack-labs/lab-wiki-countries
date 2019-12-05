import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.svg";
import countries from "./countries.json";
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
const CountryBox = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid grey;
`;
const LeftBar = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
`;

export default class App extends Component {
  state = {
    data: countries
  };
  render() {
    return (
      <MainWrapper>
        <Nav>
          <p>WikiCountries</p>
        </Nav>
        <LeftBar>
          {this.state.data.map((e, i) => (
            <CountryBox>
              <Link to={`/${i}`}>
                {e.flag} {e.name.official}
              </Link>
            </CountryBox>
          ))}
        </LeftBar>
      </MainWrapper>
    );
  }
}
