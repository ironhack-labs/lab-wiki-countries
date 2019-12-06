import React, { Component } from "react";
import { Link } from "react-router-dom";
import countries from "./countries.json";
import styled from "styled-components";
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

export default class Detail extends Component {
  state = {
    data: countries
  };
  render() {
    return (
      <LeftBar className="overflow-auto">
        {this.state.data.map((e, i) => (
          <CountryBox>
            <Link to={`/${i}`}>
              {e.flag} {e.name.official}
            </Link>
          </CountryBox>
        ))}
      </LeftBar>
    );
  }
}
