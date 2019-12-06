import React, { Component } from "react";
import countries from "./countries.json";
import { Link } from "react-router-dom";
import styled from "styled-components";

const DetailBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
`;

export default class Detail extends Component {
  state = {
    borders: []
  };
  render() {
    const country = countries[Number(this.props.match.params.i)];
    country.borders.forEach(e => {
      for (let i = 0; i++; i < countries.length) {
        if (e === countries[i].cca3) {
          const pais = { name: countries[i].name.common, idx: i };
          const state = this.state.borders;
          state.push(pais);
          this.setState({ borders: state });
        }
      }
    });
    console.log(this.state.borders);
    return (

      <DetailBox>
        <h1 id="buttmborder">{country.name.common}</h1>        
        <p>Capital : {country.capital[0]}</p>

        <p>Area: {country.area}</p>
        <ul>
          {country.borders.map(e => (
            <li>
              <Link>
                <p>{e}</p>
              </Link>
            </li>
          ))}
        </ul>∫
      </DetailBox>
    );
  }
}